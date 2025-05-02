import { Assets } from "pixi.js";
import PixiApp from "../../types/pixiApp";
import addBackground from "../../utils/addBackground";
import assets from "./assets";

export default async function fishPond(app: PixiApp) {
  await Assets.load(assets);

  addBackground({ app, spriteName: "background" });
}
