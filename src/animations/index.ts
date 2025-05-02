import { Application, Renderer } from "pixi.js";
import rotatingBunny from "./rotatingBunny";
import fishPond from "./fishPond";

export default function animations(app: Application<Renderer>) {
  return {
    rotatingBunny: () => rotatingBunny(app),
    fishPond: () => fishPond(app),
  };
}
