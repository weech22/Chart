import { freeChartTypes } from "./constants";

export const isFigma = window.name === "Plugin Iframe";
export const isAdobe = window.name === undefined;

export const platform = () =>
  isFigma ? "Figma" : isAdobe ? "Adobe" : "Sketch";

// Adobe Figma Sketch
export const afs = (a, f, s) => (isAdobe ? a : isFigma ? f : s);

export const isEmpty = (array) => {
  if (!array) return true;
  if (array && array.length === 0) {
    return true;
  }
  return false;
};

export const isChartDisabled = (isPro, chartType) =>
  !(isPro || freeChartTypes.includes(chartType));
