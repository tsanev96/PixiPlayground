import { Graphics } from "pixi.js";
import PixiApp from "../../types/pixiApp";
import getScreenSize from "../../utils/getScreenSize";
import {
  BuiltMountainGraphicSpecs,
  InitialMountainSpecs,
} from "../../types/mountain";

function createMountain(
  graphics: Graphics,
  mountain: BuiltMountainGraphicSpecs,
) {
  const { startX, startY, cp1, cp2, endX, endY, color } = mountain;

  graphics
    .moveTo(startX, startY)
    .bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, endX, endY)
    .fill({ color });
}

function createMountainFromSpecs(
  specs: InitialMountainSpecs,
  screenHeight: number,
): BuiltMountainGraphicSpecs {
  const { startX, endX, peakRatio, color } = specs;
  const controlX = (startX + endX) / 2;
  const controlY = screenHeight * peakRatio;

  const controlPoint = { x: controlX, y: controlY };

  return {
    startX,
    startY: screenHeight,
    endX,
    endY: screenHeight,
    cp1: controlPoint,
    cp2: controlPoint,
    color,
  };
}

export default function getMountainGraphics(app: PixiApp) {
  const { screenWidth, screenHeight } = getScreenSize(app);

  const quarter = screenWidth / 4;
  const half = screenWidth / 2;

  const specs: InitialMountainSpecs[] = [
    {
      startX: quarter / 2,
      endX: half / 1.5,
      color: 0x7e818f,
      peakRatio: 0.2,
    },
    {
      startX: 0,
      endX: half / 2,
      color: 0xc1c0c2,
      peakRatio: 0.4,
    },
    {
      startX: quarter,
      endX: quarter * 1.8,
      color: 0x8c919f,
      peakRatio: 0.4,
    },
  ];

  const graphics = new Graphics();
  specs
    .map((spec) => createMountainFromSpecs(spec, screenHeight))
    .forEach((built) => createMountain(graphics, built));

  return graphics;
}
