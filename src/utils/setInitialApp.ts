import { Application } from "pixi.js";

export default async function setInitialApp(backgroundColor?: string) {
  const app = new Application();

  await app.init({
    resizeTo: window,
    backgroundColor,
  });

  document.body.appendChild(app.canvas);

  return app;
}
