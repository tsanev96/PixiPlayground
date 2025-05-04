import { Graphics } from "pixi.js";
import moonSvg from "../../assets/moon.svg";
import PixiApp from "../../types/pixiApp";
import getScreenSize from "../../utils/getScreenSize";
import setInitialApp from "../../utils/setInitialApp";
import svgFileToString from "../../utils/svgFileToString";
import getMountainGraphics from "./addMountains";
import { addTrees } from "./addTrees";
import addRails from "./addRails";

function addStars(app: PixiApp) {
  const graphics = new Graphics();

  const starsCount = 20;

  const { screenHeight, screenWidth } = getScreenSize(app);

  let placed = 0;
  let index = 1;

  while (placed < starsCount) {
    const x = (index * 0.7 * screenWidth) % screenWidth;
    const y = (index * 0.9 * screenHeight) % screenHeight;

    if (x == 0 || y == 0) {
      index++;
      continue;
    }

    const radius = 3 + Math.random() * 3; // radius(size) between 3 - 6
    const rotation = Math.random() * Math.PI * 2; // This gives a random direction in a full circle in radians
    const points = 5;

    const opacity = radius / 5; // larger stars are more visible

    graphics
      .star(x, y, points, radius, 0, rotation)
      .fill({ color: 0xffdf00, alpha: opacity });
    placed++;
    index++;
  }

  app.stage.addChild(graphics);
}

async function createMoon(app: PixiApp) {
  const { screenHeight, screenWidth } = getScreenSize(app);
  const moon = await svgFileToString(moonSvg);
  // Creates a graphic from a svg
  const graphics = new Graphics().svg(moon);

  graphics.x = screenWidth * 0.75;
  graphics.y = screenHeight * 0.1;

  app.stage.addChild(graphics);
}

function addMountains(app: PixiApp) {
  const group1 = getMountainGraphics(app);
  const group2 = getMountainGraphics(app);

  group2.x = app.screen.width;
  app.stage.addChild(group1, group2);

  const { screenWidth } = getScreenSize(app);
  app.ticker.add(({ deltaTime }) => {
    const dx = deltaTime * 1.2;
    group1.x -= dx;
    group2.x -= dx;

    if (group1.x <= -screenWidth) {
      group1.x += screenWidth * 2;
    }

    if (group2.x <= -screenWidth) {
      group2.x += screenWidth * 2;
    }
  });
}

export default async function chooChooTrain() {
  const app = await setInitialApp("#021f4b");

  addStars(app);
  await createMoon(app);
  addMountains(app);
  addTrees(app);
  addRails(app);
}
