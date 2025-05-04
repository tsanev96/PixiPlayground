import { Graphics } from "pixi.js";
import PixiApp from "../../types/pixiApp";
import getScreenSize from "../../utils/getScreenSize";

export default function addRails(app: PixiApp) {
  const { screenWidth, screenHeight } = getScreenSize(app);

  const groundHeight = 20;

  const ground = new Graphics()
    .rect(0, screenHeight - groundHeight, screenWidth, groundHeight)
    .fill({ color: 0xdddddd });
  app.stage.addChild(ground);

  // Track Planks
  const planks: Graphics[] = [];
  const plankWidth = 50;
  const plankHeight = 8;
  const plankGap = 15;
  const plankSpace = plankWidth + plankGap;
  const planksCount = screenWidth / plankSpace + 1;
  const plankY = screenHeight - groundHeight;

  for (let index = 0; index < planksCount; index++) {
    const plank = new Graphics()
      .rect(0, plankY, plankWidth, plankHeight)
      .fill({ color: 0x241811 });

    plank.x = index * plankSpace;
    app.stage.addChild(plank);
    planks.push(plank);
  }

  app.ticker.add(({ deltaTime }) => {
    const dx = deltaTime * 6;

    for (const plank of planks) {
      plank.x -= dx;

      if (plank.x < -plankWidth) {
        const rightMostPlank = planks.reduce(
          (prev, curr) => (prev.x > curr.x ? prev : curr),
          planks[0],
        );

        plank.x = rightMostPlank.x + plankGap + plankWidth;
      }
    }
  });

  // Rail
  const railY = screenHeight - groundHeight - plankHeight;
  const railHeight = 10;

  const rail = new Graphics()
    .rect(0, railY, screenWidth, railHeight)
    .fill({ color: 0x5c5c5c });

  app.stage.addChild(rail);
}
