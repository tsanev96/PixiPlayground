export interface PixiAsset {
  //   name: string;
  src: string;
  type?: "image";
}

export interface AssetManifest {
  background: PixiAsset;
  fish1: PixiAsset;
  fish2: PixiAsset;
  fish3: PixiAsset;
  fish4: PixiAsset;
  fish5: PixiAsset;
  overlay: PixiAsset;
  displacement: PixiAsset;
}
