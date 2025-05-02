import { Sprite } from "pixi.js";

export default interface FishSprite extends Sprite {
  speed: number;
  direction: number;
  turnSpeed: number;
}
