import animations from "./animations";
import "./styles.css";
import gsap from "gsap";
import "./gsap-playground/tweens";
import "./gsap-playground";

const { rotatingBunny, fishPond, chooChooTrain } = animations();

// rotatingBunny();
// fishPond();
// chooChooTrain();

/** GSAP  */

/*
gsap.to()
gsap.from()
gsap.fromTo()
gsap.set() - Immediately sets properties (no animation). It's essentially a zero-duration .to() tween.
*/
