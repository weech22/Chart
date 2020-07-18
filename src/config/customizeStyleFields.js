import { chartTypes, componentTypes } from "@app/constants";

// TODO: Add validators

// Common settings across chart types. To add fields: [...GRID, newField]
const GRID = [
  {
    name: "type", // "type" : 1, // 0 - without, 1 - full grid, 2 - horizontal lines, 3 - vertical lines
    label: "Grid",
    type: componentTypes.SELECT,
    options: [
      { value: 0, label: "Without" },
      { value: 1, label: "Full grid" },
      { value: 2, label: "Horizontal lines" },
      { value: 3, label: "Vertical lines" },
    ],
  },
  {
    name: "lineWidth",
    label: "Thikness of grid line, px",
    type: componentTypes.NUM,
    defaultValue: 1,
  },
  {
    name: "color",
    label: "Color",
    type: componentTypes.COLOR,
    defaultValue: "#F0F0F0",
  },
];

// Common settings across chart types. To add fields: [...LABELS, newField]
const LABELS = [
  {
    name: "type",
    label: "Labels",
    type: componentTypes.SELECT,
    options: [
      { value: 0, label: "Without" },
      { value: 1, label: "X & Y LABELS" },
      { value: 2, label: "Y LABELS" },
      { value: 3, label: "X LABELS" },
    ],
    defaultValue: 1,
  },
  {
    name: "fontName",
    label: "Font name",
    type: componentTypes.STRING,
    defaultValue: "Helvetica",
  },
  {
    name: "fontStyle",
    label: "Font style",
    type: componentTypes.STRING,
    defaultValue: "Regular",
  },
  {
    name: "textCase",
    label: "Text case",
    type: componentTypes.SELECT,
    options: [
      { value: "ORIGINAL", label: "Original" },
      { value: "UPPER", label: "Upper" },
      { value: "LOWER", label: "Lower" },
      { value: "TITLE", label: "Title" },
    ],
    defaultValue: "ORIGINAL",
  },
  {
    name: "fontSize",
    label: "Font size",
    type: componentTypes.NUM,
    defaultValue: 10,
  },
  {
    name: "lineHeight",
    label: "Line height",
    type: componentTypes.NUM,
    defaultValue: 10,
  },
  {
    name: "letterSpacing",
    label: "Letter spacing, %",
    type: componentTypes.NUM,
    defaultValue: 0,
  },
  {
    name: "color",
    label: "Color",
    type: componentTypes.COLOR,
    defaultValue: "#a3a3a3",
  },
];

// SETTINGS

const beginAtZero = (defaultValue) => ({
  name: "beginAtZero",
  label: "Start Y-axis from 0",
  type: componentTypes.SELECT,
  options: [
    { value: 0, label: "Yes" },
    { value: 1, label: "No" },
  ],
  defaultValue,
});

const lineType = (defaultValue) => ({
  name: "lineType",
  label: "Type of line",
  type: componentTypes.SELECT,
  options: [
    { value: 0, label: "Curved" },
    { value: 1, label: "Straight" },
    { value: 2, label: "Spline" },
  ],
  defaultValue,
});

const lineWidth = (defaultValue) => ({
  name: "lineWidth",
  label: "Thikness of line, px",
  type: componentTypes.NUM,
  defaultValue,
});

const dotType = (defaultValue) => ({
  name: "dotType",
  label: "Dots",
  type: componentTypes.SELECT,
  options: [
    { value: 0, label: "Without dots" },
    { value: 1, label: "Filled dots" },
    { value: 2, label: "Unfilled dots" },
  ],
  defaultValue,
});

const dotDiameter = (defaultValue) => ({
  name: "dotDiameter",
  label: "Diameter of dot, px",
  type: componentTypes.NUM,
  defaultValue,
});

const opacity = (defaultValue) => ({
  name: "opacity",
  label: "Fill opacity (0...1)",
  type: componentTypes.NUM,
  defaultValue,
});

const roundTop = (defaultValue) => ({
  name: "roundTop",
  label: "Round top corners, px",
  type: componentTypes.NUM,
  defaultValue,
});

const margin = (defaultValue) => ({
  name: "margin",
  label: "Margin between bars (0...1)",
  type: componentTypes.NUM,
  defaultValue,
});

const internalMargin = (defaultValue) => ({
  name: "internalMargin",
  label: "Internal margin",
  type: componentTypes.NUM,
  defaultValue,
});

const sorting = (defaultValue) => ({
  name: "sorting",
  label: "Sorting",
  type: componentTypes.SELECT,
  options: [
    { value: 0, label: "Descending" },
    { value: 1, label: "Without sorting" },
  ],
  defaultValue,
});

const typeOfCircle = (defaultValue) => ({
  name: "typeOfCircle",
  label: "Type of circle",
  type: componentTypes.SELECT,
  options: [
    { value: 0, label: "Full circle" },
    { value: 1, label: "Half of circle" },
  ],
  defaultValue,
});

const backgroundColor = (defaultValue) => ({
  name: "backgroundColor",
  label: "Fill opacity (0...1)",
  type: componentTypes.COLOR,
  defaultValue,
});

const segments = (defaultValue) => ({
  name: "segments",
  label: "Color segments",
  type: componentTypes.NUM,
  defaultValue,
});

const thicknessOfDonut = (defaultValue) => ({
  name: "thicknessOfDonut",
  label: "Color segments",
  type: componentTypes.NUM,
  defaultValue,
});

const thicknessOfProgress = (defaultValue) => ({
  name: "thicknessOfProgress",
  label: "Color segments",
  type: componentTypes.NUM,
  defaultValue,
});

const endOfLine = (defaultValue) => ({
  name: "endOfLine",
  label: "End of line",
  type: componentTypes.SELECT,
  options: [
    { value: 0, label: "Default" },
    { value: 1, label: "Round" },
  ],
  defaultValue,
});

export default {
  [chartTypes.LINE_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [
      beginAtZero(0),
      lineType(0),
      lineWidth(1),
      dotType(2),
      dotDiameter(10),
    ],
  },
  [chartTypes.AREA_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [beginAtZero(0), lineType(0), lineWidth(0), opacity(0.8)],
  },
  [chartTypes.STACKED_AREA_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [lineType(0)],
  },
  [chartTypes.STREAM_GRAPH]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [lineType(0)],
  },
  [chartTypes.VERTICAL_BAR_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [margin(0.4), roundTop(0)],
  },
  [chartTypes.HORIZONTAL_BAR_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [margin(0.4), roundTop(0)],
  },
  [chartTypes.GROUPED_BAR_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [margin(0.4), internalMargin(0), roundTop(0)],
  },
  [chartTypes.GROUPED_HORIZONTAL_BAR_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    GRID,
    LABELS,
    SETTINGS: [margin(0.4), internalMargin(0), roundTop(0)],
  },

  [chartTypes.PIE_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    SETTINGS: [sorting(0), typeOfCircle(0), margin(0)],
  },
  [chartTypes.DONUT_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4", "#b2df8a"],
    SETTINGS: [sorting(0), typeOfCircle(0), thicknessOfDonut(30), margin(0)],
  },
  [chartTypes.PROGRESS_CHART]: {
    COLORS: ["#a6cee3"],
    SETTINGS: [
      backgroundColor("#f7f7f7"),
      thicknessOfProgress(10),
      endOfLine(0),
    ],
  },

  [chartTypes.SPARKLINE]: {
    COLORS: ["#a6cee3"],
    SETTINGS: [lineWidth(1), dotDiameter(4)],
  },
  [chartTypes.SCATTER_PLOT]: {
    COLORS: ["#a6cee3"],
    GRID,
    LABELS,
    SETTINGS: [dotDiameter(8)],
  },
  [chartTypes.CANDLESTICK_CHART]: {
    COLORS: ["#a6cee3", "#1f78b4"],
    GRID,
    LABELS: [
      ...LABELS,
      // (yAxisPosition: "left"), //
      //  (xAxisPosition: "bottom"), //
    ],
    SETTINGS: [margin(0.4)],
  },
  [chartTypes.HISTOGRAM]: {
    COLORS: ["#a6cee3"],
    GRID,
    LABELS,
    SETTINGS: [margin(2)],
  },
  [chartTypes.HEATMAP]: {
    COLORS: ["#a6cee3"],
    LABELS,
    SETTINGS: [margin(0), segments(4)],
  },
};
