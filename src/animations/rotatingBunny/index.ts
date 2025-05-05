import { Assets, Sprite } from "pixi.js";
import setInitialApp from "../../utils/setInitialApp";
import { gsap } from "gsap";

export default async function rotatingBunny() {
  const app = await setInitialApp("lightblue");

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);

  app.stage.addChild(bunny);

  bunny.scale.set(2.5);
  bunny.anchor.set(0.5);

  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  // Pixi ticker
  // ticker is a PixiJS object that runs one or more callbacks each frame.
  // app.ticker.add((time) => {
  //   bunny.rotation += 0.01 * time.deltaTime;
  // });

  gsap.to(bunny, {
    rotation: Math.PI * 2, // Make a full circle
    duration: 2, // duration to make the full rotation radians
    // Negative number will spin forever
    repeat: 2,
    ease: "none",
  });
}
