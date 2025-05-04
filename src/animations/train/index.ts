import { Assets, Graphics, Sprite } from "pixi.js";
import setInitialApp from "../../utils/setInitialApp";
import getScreenSize from "../../utils/getScreenSize";
import PixiApp from "../../types/pixiApp";
import moonSvg from "../../../public/moon.svg";
import svgFileToString from "../../utils/svgFileToString";

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

interface Cordinates {
  x: number;
  y: number;
}

interface Mountain {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  cp1: Cordinates;
  cp2: Cordinates;
  color: number;
}

function createMountain(app: PixiApp, mountain: Mountain) {
  const { startX, startY, cp1, cp2, endX, endY, color } = mountain;
  const graphics = new Graphics();

  graphics
    .moveTo(startX, startY) // Start position
    .bezierCurveTo(
      cp1.x, // Curve left X
      cp1.y, // Curve left Y
      cp2.x, // Curve right X
      cp2.y, // Curve right Y
      endX, // End position X
      endY, // End position Y
    )
    .fill({ color });

  app.stage.addChild(graphics);
}

function createMountainGroup(app: PixiApp) {
  const { screenHeight, screenWidth } = getScreenSize(app);

  const quarterScreenWidth = screenWidth / 4;
  const halfScreenWidth = screenWidth / 2;

  const startMidX = quarterScreenWidth / 2;
  const endMidX = halfScreenWidth / 1.5;
  const midXcp = (startMidX + endMidX) / 2;
  const middle: Mountain = {
    startX: startMidX,
    startY: screenHeight,
    endX: endMidX,
    endY: screenHeight,
    cp1: {
      x: midXcp,
      y: screenHeight * 0.2,
    },
    cp2: {
      x: midXcp,
      y: screenHeight * 0.2,
    },
    color: 0x7e818f,
  };

  const startLeftX = 0;
  const endLeftX = halfScreenWidth / 2;
  const leftXcp = (startLeftX + endLeftX) / 2;
  const left: Mountain = {
    startX: startLeftX,
    startY: screenHeight,
    endX: endLeftX,
    endY: screenHeight,
    cp1: {
      x: leftXcp,
      y: screenHeight * 0.4,
    },
    cp2: {
      x: leftXcp,
      y: screenHeight * 0.4,
    },
    color: 0xc1c0c2,
  };

  const startRightX = quarterScreenWidth;
  const endRightX = startRightX * 1.8;
  const rightXcp = (startRightX + endRightX) / 2;
  const right: Mountain = {
    startX: startRightX,
    startY: screenHeight,
    endX: endRightX,
    endY: screenHeight,
    cp1: {
      x: rightXcp,
      y: screenHeight * 0.4,
    },
    cp2: {
      x: rightXcp,
      y: screenHeight * 0.4,
    },
    color: 0x8c919f,
  };

  createMountain(app, middle);
  createMountain(app, left);
  createMountain(app, right);
}

export default async function chooChooTrain() {
  const app = await setInitialApp("#021f4b");

  addStars(app);
  await createMoon(app);

  const group1 = createMountainGroup(app);
  const group2 = createMountainGroup(app);

  //   group2.x = app.screen.width;
  //   app.stage.addChild(group1, group2);
}
