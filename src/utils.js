import { freeChartTypes } from "./constants";
import * as R from "ramda";

export const isFigma = window.name === "Plugin Iframe";
export const isAdobe = window.name === undefined;

export const platform = () =>
  isFigma ? "Figma" : isAdobe ? "Adobe" : "Sketch";

// Adobe Figma Sketch
export const afs = (a, f, s) => (isAdobe ? a : isFigma ? f : s);

export const isEmpty = R.isEmpty;

export const isChartDisabled = (isPro, chartType) =>
  !(isPro || freeChartTypes.includes(chartType));

export const equalIgnoreOrder = R.compose(isEmpty, R.symmetricDifference);
