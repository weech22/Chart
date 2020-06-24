export const isFigma = window.name === "Plugin Iframe";
export const isAdobe = window.name === undefined;

export const platform = () =>
  isFigma ? "Figma" : isAdobe ? "Adobe" : "Sketch";
