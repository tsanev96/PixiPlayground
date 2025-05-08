import gsap from "gsap";
import "./effects";

const tl = gsap.timeline();
/*
// tl.to(".box", { x: "100%", duration: 3, yoyo: true, repeat: -1 });
//   .to(".box", { x: 0, duration: 2, ease: "bounce.in" });

tl
  .to(".box", {
    x: "90vw",
    //   ease: "back.out",
    duration: 5,
    rotation: 45,
    yoyo: true,
    // repeat: 2,
  })
  .to(".box", { x: "0", duration: 3, delay: 1, rotation: 0 });

// tl.set(".box", { clearProps: "all" });
*/

const boxes = document.querySelectorAll(".box");

const testBox = document.querySelector(".box-gsap")!;

gsap.to(".box", {
  duration: 1,
  rotation: 90,
  opacity: 1,
  ease: "bounce",
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    gsap.to(".box", {
      y: -400,
      duration: 5,
      stagger: 0.2,
      ease: "back.in",
      opacity: 0,
      // reversed: true,
    });
  });
});

/*
gsap.to()
gsap.from()
gsap.fromTo()
gsap.set() - Immediately sets properties (no animation). It's essentially a zero-duration .to() tween.
*/
