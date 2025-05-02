import { Application } from "pixi.js";
import animations from "./animations";
import "./styles.css";
const app = new Application();

async function setup() {
  await app.init({
    resizeTo: window,
    // backgroundColor: 0x1099bb,
  });

  document.body.appendChild(app.canvas);
}

await setup();

const { rotatingBunny, fishPond } = animations(app);

// rotatingBunny();
fishPond();
