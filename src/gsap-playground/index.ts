import gsap from "gsap";

const timeline = gsap.timeline();
/*
// timeline.to(".box", { x: "100%", duration: 3, yoyo: true, repeat: -1 });
//   .to(".box", { x: 0, duration: 2, ease: "bounce.in" });

timeline
  .to(".box", {
    x: "90vw",
    //   ease: "back.out",
    duration: 5,
    rotation: 45,
    yoyo: true,
    // repeat: 2,
  })
  .to(".box", { x: "0", duration: 3, delay: 1, rotation: 0 });

// timeline.set(".box", { clearProps: "all" });
*/

const boxes = document.querySelectorAll(".box");

gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1,
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
    });
  });
});
