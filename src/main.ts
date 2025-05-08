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
// scrollTriggerBoxes();
/** GSAP  */

const target = document.querySelector(".box-gsap")!;

target.addEventListener("mouseover", () => {
  if (gsap.effects.fade) {
    gsap.effects.fade(target);
  }
});

target.addEventListener("mouseleave", () => {
  if (gsap.effects.unfade) {
    gsap.effects.unfade(target, {
      duration: 1.5,
    });
  }
});
