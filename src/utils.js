export const isFigma = window.name === "Plugin Iframe";
export const isAdobe = window.name === undefined;

export const platform = () =>
  isFigma ? "Figma" : isAdobe ? "Adobe" : "Sketch";

// Adobe Figma Sketch
export const afs = (a, f, s) => (isAdobe ? a : isFigma ? f : s);
