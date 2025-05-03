import { Assets, Container, Sprite, Texture, TilingSprite } from "pixi.js";
import PixiApp from "../../types/pixiApp";
import addBackground from "../../utils/addBackground";
import assets from "./assets";
import FishSprite from "../../types/FishSprite";
import { addOverlay, animateOverlay } from "../../utils/addAnimatedOverlay";

function createFishes(app: PixiApp) {
  const fishContainer = new Container();
  app.stage.addChild(fishContainer);

  const fishCount = 20;
  const fishAssets = ["fish1", "fish2", "fish3", "fish4", "fish5"];

  const fishes: FishSprite[] = [];

  for (let i = 0; i < fishCount; i++) {
    const fishAsset = fishAssets[i % fishAssets.length];
    const fish = Sprite.from(fishAsset) as FishSprite;

    fish.anchor.set(0.5);

    fish.direction = Math.PI * 2 * Math.random(); // direction in a circle
    fish.speed = 2 + 2 * Math.random();
    fish.turnSpeed = Math.random() - 0.8;

    fish.scale.set(0.5 + Math.random() * 0.2);

    fish.x = app.screen.width * Math.random();
    fish.y = app.screen.height * Math.random();

    fishes.push(fish);

    app.stage.addChild(fish);
  }

  return fishes;
}

function animateFishes(app: PixiApp, fishes: FishSprite[]) {
  const screenWidth = app.screen.width;
  const screenHeight = app.screen.height;

  /** Extra space outside of boundaries */
  const stagePadding = 100;
  const boundWidth = screenWidth + stagePadding * 2; // 1000(1200)
  const boundHeight = screenHeight + stagePadding * 2; // 700(900)

  fishes.forEach((fish) => {
    const { direction, x, y, turnSpeed, speed } = fish;
    // Updates direction and movements
    fish.direction += turnSpeed * 0.01;
    fish.x += Math.sin(direction) * speed; // Math.sin() 0-90 -> 0 - 1
    fish.y += Math.cos(direction) * speed; // Math.cos() 0-90 -> 1 - 0
    fish.rotation = -direction - Math.PI / 2; // rotating the sprite by -90 degree

    const isOffLeft = x < -stagePadding;
    const isOffRight = x > screenWidth + stagePadding;
    const isOffBottom = y > screenHeight + stagePadding;
    const isOffTop = y < -stagePadding;

    // Boundary wrap logic
    if (isOffLeft) fish.x += boundWidth;
    if (isOffRight) fish.x -= boundWidth;
    if (isOffBottom) fish.y -= boundHeight;
    if (isOffTop) fish.y += boundHeight;
  });
}

export default async function fishPond(app: PixiApp) {
  await Assets.load(assets); // loads assets and keep them in cache

  addBackground({ app, spriteName: "background" });
  addOverlay(app);

  const fishes = createFishes(app);

  app.ticker.add((time) => {
    const { deltaTime } = time;

    animateFishes(app, fishes);
    animateOverlay(deltaTime);
  });
}
