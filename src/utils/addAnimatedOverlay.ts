import { Texture, TilingSprite } from "pixi.js";
import PixiApp from "../types/pixiApp";

let overlay: TilingSprite | undefined;

export function addOverlay(app: PixiApp, textureName?: string) {
  const texture = Texture.from(textureName ?? "overlay");

  overlay = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
  });

  app.stage.addChild(overlay);
}

export function animateOverlay(deltaTime: number) {
  // tilePosition - Moves the texture inside the TilingSprite, giving the effect of it scrolling/repeating
  // using just x.y - Moves the entire TilingSprite

  if (!overlay) {
    return;
  }

  overlay.tilePosition.x += deltaTime;
  overlay.tilePosition.y += deltaTime;
}
