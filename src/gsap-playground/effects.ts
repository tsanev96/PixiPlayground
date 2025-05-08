import gsap from "gsap";

gsap.registerEffect({
  name: "fade",
  effect: (targets: Element | Element[], config: { duration: number }) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
  defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
  // can be called on the timeline
  extendTimeline: true,
});

gsap.registerEffect({
  name: "unfade",
  effect: (targets: Element | Element[], config: { duration: number }) => {
    return gsap.to(targets, { duration: config.duration, opacity: 1 });
  },
  defaults: { duration: 2 },
  extendTimeline: true,
});
