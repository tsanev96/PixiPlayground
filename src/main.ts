import animations from "./animations";
import gsap from "gsap";
import "./gsap-playground/tweens";
import "./gsap-playground";
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from "pixi.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
PixiPlugin.registerPIXI(PIXI);

const { rotatingBunny, fishPond, chooChooTrain, scrollTriggerBoxes } =
  animations();

// rotatingBunny();
// fishPond();
// chooChooTrain();
scrollTriggerBoxes();
/** GSAP  */

/*
gsap.to()
gsap.from()
gsap.fromTo()
gsap.set() - Immediately sets properties (no animation). It's essentially a zero-duration .to() tween.
*/
