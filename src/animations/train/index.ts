import { Graphics } from "pixi.js";
import setInitialApp from "../../utils/setInitialApp";
import getScreenSize from "../../utils/getScreenSize";
import PixiApp from "../../types/pixiApp";

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

export default async function chooChooTrain() {
  const app = await setInitialApp("#021f4b");

  addStars(app);
}
