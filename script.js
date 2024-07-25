gsap.from("#nav h1", {
  x: 0,
  y: -100,
  duration: 1,
  opacity: 0,
});

gsap.from("#nav h5", {
  x: 0,
  y: -100,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("#page1-part2-about h1", {
  x: 0,
  y: 200,
  opacity: 0,
});

gsap.to("#page2 img", {
  scale: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "top -100% ",
    markers: true,
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page3 img", {
  x: 1000,
  y: 20,
  stagger: 0.5,
  rotate: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0",
    end: "top -100% ",
    markers: true,
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page4-main h1", {
  transform: "translateX(-135%)",
  scrollTrigger: {
    trigger: "#page4-main",
    scroller: "body",
    start: "top 0",
    end: "top -100%",
    markers: true,
    scrub: 3,
    pin: true,
  },
});
