import Cordinates from "./cordinates";

export interface InitialMountainSpecs {
  startX: number;
  endX: number;
  peakRatio: number;
  color: number;
}

export interface BuiltMountainGraphicSpecs {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  cp1: Cordinates;
  cp2: Cordinates;
  color: number;
}
