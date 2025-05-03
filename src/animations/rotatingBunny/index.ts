import { Assets, Sprite } from "pixi.js";
import setInitialApp from "../../utils/setInitialApp";

export default async function rotatingBunny() {
  const app = await setInitialApp();

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);

  app.stage.addChild(bunny);

  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  // ticker is a PixiJS object that runs one or more callbacks each frame.
  app.ticker.add((time) => {
    /**
     * Time is a Ticker object which holds time related data.
     * Here we use deltaTime, which is the time elapsed between the frame callbacks
     * to create frame-independent transformation. Keeping the speed consistent.
     */
    bunny.rotation += 0.01 * time.deltaTime;
  });
}
