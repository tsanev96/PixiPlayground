import { DisplacementFilter, Sprite } from "pixi.js";
import PixiApp from "../types/pixiApp";

export default function addDisplacementEffect(app: PixiApp) {
  const sprite = Sprite.from("displacement");

  sprite.texture.source.wrapMode = "repeat";

  const filter = new DisplacementFilter({
    sprite,
    scale: 50,
  });

  app.stage.filters = [filter];
}
