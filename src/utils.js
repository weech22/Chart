import { freeChartTypes } from "./constants";
import * as R from "ramda";

export const isFigma = window.name === "Plugin Iframe";
export const isAdobe = window.name === undefined;

export const platform = () =>
  isFigma ? "Figma" : isAdobe ? "Adobe" : "Sketch";

// Adobe Figma Sketch
export const afs = (a, f, s) => (isAdobe ? a : isFigma ? f : s);

export const isChartDisabled = (isPro, chartType) =>
  !(isPro || freeChartTypes.includes(chartType));

export const equalIgnoreOrder = R.compose(R.isEmpty, R.symmetricDifference);

export const readFileContent = (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  }).then((data) => data);
};

export const transpose = (a) =>
  R.map((c) => R.map((r) => r[c], a), R.keys(a[0]));

export const clearGrid = (grid) =>
  grid.map((row) =>
    row.map(() => ({
      value: "",
    }))
  );

export const generateEmptyGrid = (n = 100) =>
  Array(n).fill(Array(n).fill({ value: "" }));

const cToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbToHex = (r, g, b) =>
  `${cToHex(r)}${cToHex(g)}${cToHex(b)}`.toUpperCase();

/* function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
} */

export const numToPercent = (n) => `${Math.round(n * 100)}%`;

export const swap = R.curry((index1, index2, list) => {
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 > list.length - 1 ||
    index2 > list.length - 1
  ) {
    return list;
  }
  const value1 = list[index1];
  const value2 = list[index2];
  return R.pipe(
    R.set(R.lensIndex(index1), value2),
    R.set(R.lensIndex(index2), value1)
  )(list);
});
