import { Graphics } from "pixi.js";
import PixiApp from "../../types/pixiApp";
import getScreenSize from "../../utils/getScreenSize";

export function addTrees(app: PixiApp) {
  const { screenHeight } = getScreenSize(app);
  const trees: Graphics[] = [];

  const treeY = screenHeight - 28;
  const treeSpacing = 15;
  const treeWidth = 200;

  const treesCount = app.screen.width / (treeWidth + treeSpacing) + 1;

  for (let index = 0; index < treesCount; index++) {
    const width = 200;
    const height = screenHeight / 3;

    const tree = createTree(width, height);
    trees.push(tree);

    tree.x = index * (treeSpacing + treeWidth);
    tree.y = treeY;

    app.stage.addChild(tree);
  }

  app.ticker.add(({ deltaTime }) => {
    for (const tree of trees) {
      tree.x -= deltaTime * 3;
      if (tree.x <= -(treeWidth / 2)) {
        tree.x += treesCount * (treeWidth + treeSpacing) + treeSpacing;
      }
    }
  });
}

function createTree(width: number, height: number) {
  // trunk
  const trunkWidth = 30;
  const trunkHeight = height / 4;
  const trunkColor = 0x563929;

  // trunk created
  const graphics = new Graphics()
    .rect(-trunkWidth / 2, -trunkHeight, trunkWidth, trunkHeight) // top center of the rect
    .fill({ color: trunkColor });

  // crown
  const crownLevels = 4;
  const crownWidthIncrement = width / crownLevels;
  const crownHeight = height - trunkHeight;
  const crownLevelHeight = crownHeight / crownLevels;
  const crownColor = 0x264d3d;

  for (let index = 0; index < crownLevels; index++) {
    const offset = index < crownLevels - 1 ? crownLevelHeight / 2 : 0;
    const levelWidth = width - crownWidthIncrement * index;
    const y = -trunkHeight - crownLevelHeight * index;
    const crownPeak = y - crownLevelHeight;

    graphics
      .moveTo(-levelWidth / 2, y)
      .lineTo(0, crownPeak - offset)
      .lineTo(levelWidth / 2, y)
      .fill({ color: crownColor });
  }

  return graphics;
}
