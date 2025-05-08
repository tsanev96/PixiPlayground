import { Container, Graphics } from "pixi.js";
import setInitialApp from "../../utils/setInitialApp";
import getScreenSize from "../../utils/getScreenSize";
import gsap from "gsap";
import getRandomSign from "../../utils/getRandomSign";

const mainContainer = document.querySelector("#app");

function getRandomColor(colors: number[]): number {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function createFakeDimensionalArray(
  cubeNumbers: number,
  size: number,
  halfWidth: number,
): { container: Container; cubes: Graphics[] } {
  const container = new Container();
  const cubes: Graphics[] = [];

  const colors = [
    0xf94144, // Coral Red
    0xf3722c, // Orange
    0xf9c74f, // Yellow
    0x90be6d, // Light Green
    0x43aa8b, // Teal
    0x577590, // Muted Blue
    0x277da1, // Deep Blue
  ];

  let counter = 0;

  container.y = 80;
  container.x = halfWidth - Math.ceil(cubeNumbers / 2) * size;

  for (let i = 0; i < cubeNumbers; i++) {
    for (let j = 0; j < cubeNumbers; j++) {
      const color = getRandomColor(colors);
      const x = i * size;
      const y = j * size;
      const rect = new Graphics().rect(x, y, size, size).fill(color);
      cubes.push(rect);
      counter++;
      container.addChild(rect);
    }
  }

  return {
    container,
    cubes,
  };
}
export default async function scrollTriggerBoxes() {
  const app = await setInitialApp("#000");
  document.body.style.height = "130vh";

  const { screenHeight, screenWidth } = getScreenSize(app);

  const { cubes, container } = createFakeDimensionalArray(
    10,
    20,
    screenWidth / 2,
  );

  cubes.forEach((cube) => {
    const x = screenWidth * Math.random() * getRandomSign();
    const y = screenHeight * Math.random();
    const scaleVal = Math.random() * 3;
    const rotateVal = Math.round(Math.random() * 360 * 2) * getRandomSign();

    gsap.to(cube, {
      pixi: {
        x,
        y,
        scale: scaleVal,
        rotation: rotateVal,
      },
      scrollTrigger: {
        trigger: mainContainer,
        start: "top",
        end: "bottom",
        scrub: 2,
        toggleActions: "play none reverse none",
        fastScrollEnd: true,
      },
    });
  });

  app.stage.addChild(container);
}
