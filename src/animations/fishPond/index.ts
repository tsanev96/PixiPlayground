import { Assets, Container, Sprite } from "pixi.js";
import PixiApp from "../../types/pixiApp";
import addBackground from "../../utils/addBackground";
import assets from "./assets";
import FishSprite from "../../types/FishSprite";

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

export default async function fishPond(app: PixiApp) {
  await Assets.load(assets); // loads assets and keep them in cache

  addBackground({ app, spriteName: "background" });

  const fishes = createFishes(app);

  for (let i = 0; i <= 360; i++) {
    console.log(Math.sin(i));
  }
  app.ticker.add((time) => {
    const { deltaTime } = time;

    /** Extra space outside of boundaries */
    const stagePadding = 100;
    const boundWidth = app.screen.width + stagePadding * 2;
    const boundHeight = app.screen.height + stagePadding * 2;

    fishes.forEach((fish) => {
      // Math.sin() 0-90 -> 0 - 1
      // Math.cos() 0-90 -> 1 - 0
      fish.direction += fish.turnSpeed * 0.01;
      fish.x += Math.sin(fish.direction) * fish.speed;
      fish.y += Math.cos(fish.direction) * fish.speed;
      fish.rotation = -fish.direction - Math.PI / 2; // rotating the sprite by -90 degree
    });
  });
}
