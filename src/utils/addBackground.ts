import { Sprite } from "pixi.js";
import PixiApp from "../types/pixiApp";

interface AddBackground {
  app: PixiApp;
  spriteName: string;
}

export default function addBackground({ app, spriteName }: AddBackground) {
  const background = Sprite.from(spriteName);

  background.anchor.set(0.5);

  const { width, height } = app.screen;

  const isLandscape = width > height;

  if (isLandscape) {
    background.width = width * 1.2; // 1200px -> scale.x = 1200 / 630(orig width) 1.9
    background.scale.y = background.scale.x; // 410(orig height) * 1.9
  } else {
    background.height = height * 1.2;
    background.scale.x = background.scale.y;
  }

  background.x = width / 2;
  background.y = height / 2;

  app.stage.addChild(background);
}
