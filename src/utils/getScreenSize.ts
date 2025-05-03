import PixiApp from "../types/pixiApp";

export default function getScreenSize(app: PixiApp) {
  return {
    screenWidth: app.screen.width,
    screenHeight: app.screen.height,
  };
}
