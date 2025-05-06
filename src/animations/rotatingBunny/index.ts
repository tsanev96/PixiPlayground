import { Assets, Sprite } from "pixi.js";
import setInitialApp from "../../utils/setInitialApp";
import { gsap } from "gsap";

type Timeline = gsap.core.Timeline;

interface TimelineBunny {
  bunny: Sprite;
  timeline: Timeline;
}

function rotate({ bunny, timeline }: TimelineBunny) {
  timeline.to(bunny, {
    rotation: Math.PI * 2,
    repeat: -1,
    duration: 4,
    ease: "none",
  });
}

function pauseRotating({ bunny, timeline }: TimelineBunny) {
  // gsap.killTweensOf(sprite);
  timeline.pause();
}

function playRotating({ bunny, timeline }: TimelineBunny) {
  timeline.play();
}

export default async function rotatingBunny() {
  const app = await setInitialApp("lightblue");

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);
  const timeline = gsap.timeline();

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

  const timelineBunny = {
    bunny,
    timeline,
  };
  rotate(timelineBunny);

  bunny.interactive = true; // to trigger events

  let isRotating = true;

  bunny.on("pointerdown", () => {
    if (isRotating) {
      pauseRotating(timelineBunny);
      isRotating = false;
    } else {
      playRotating(timelineBunny);
      isRotating = true;
    }
  });
}
