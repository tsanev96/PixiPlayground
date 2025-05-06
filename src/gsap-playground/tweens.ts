import gsap from "gsap";

const timeline = gsap.timeline();
gsap.set(".outline, code", { autoAlpha: 0 });
gsap.set(".code-to", {
  autoAlpha: 1,
});

var form = document.querySelector("form")!;
form.addEventListener("change", function () {
  const input = document.querySelector(
    'input[name="method"]:checked',
  )! as HTMLInputElement;
  const type = input.value;

  gsap.set(".circle", { clearProps: "all" }); // clear all properties that were added during the animation, reset
  gsap.set(".outline, code", { autoAlpha: 0 });

  //   timeline.clear();
  switch (type) {
    case "to":
      timeline
        .set(".code-to", { autoAlpha: 1 }) // showing the code tag
        .to(".to-outline", { autoAlpha: 1 }) // showing the outline cirle
        .to(".circle", { x: 40, duration: 2, ease: "bounce", fill: "orange" }); // moves the circle with 40px
      break;
    case "set":
      timeline
        .to(".code-set", { autoAlpha: 1 })
        .set(".circle", { x: 40, fill: "blue" });
      break;
    case "from":
      timeline
        .set(".code-from", { autoAlpha: 1 })
        .to(".from-outline", { autoAlpha: 1 }) // shows the outline circle (start point)
        .from(".circle", { x: -40, duration: 1.2, ease: "back.out" }); // from -x to the current position of the circle
      break;
    case "fromTo":
      timeline
        .set(".code-fromTo", { autoAlpha: 1 })
        .to([".from-outline", ".to-outline"], { autoAlpha: 1 }) // showing bot elements at the same time
        .fromTo(
          ".circle",
          { x: -40 }, // starting point
          { x: 40, duration: 2, ease: "bounce.in", fill: "lightblue" }, // finishing point
        );
  }
});

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
