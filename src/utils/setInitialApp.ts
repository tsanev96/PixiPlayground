import { Application } from "pixi.js";

export default async function setInitialApp(backgroundColor?: string) {
  const app = new Application();

  const mainContainer = document.querySelector("#app");

  await app.init({
    resizeTo: window,
    backgroundColor,
  });

  if (mainContainer) {
    mainContainer.appendChild(app.canvas);
  } else {
    document.body.appendChild(app.canvas);
  }

  return app;
}
