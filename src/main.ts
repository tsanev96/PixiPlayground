import animations from "./animations";
import "./styles.css";
import gsap from "gsap";
import "./gsap-playground/tweens";

const { rotatingBunny, fishPond, chooChooTrain } = animations();

// rotatingBunny();
// fishPond();
// chooChooTrain();

/** GSAP  */

// four types of tweens
gsap.from(".box", { x: 300, animation: "ease" });

/*
gsap.to()
gsap.from()
gsap.fromTo()
gsap.set() - Immediately sets properties (no animation). It's essentially a zero-duration .to() tween.
*/
