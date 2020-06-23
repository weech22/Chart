import assets from "./assets";

export const forms = {
  LOGIN: "LOGIN",
  PRODUCT_EDITOR: "PRODUCT_EDITOR",
  DRIVER: "DRIVER",
  PROMOTION_EDITOR: "promotion_editor",
};

export const modules = {
  TEMPLATE: "TEMPLATE",
  CHART: "CHART",
  SETTINGS: "SETTINGS",
  FIGMA: "FIGMA",
  ACCOUNT: "ACCOUNT",
  ADOBE: "ADOBE",
  SKETCH: "SKETCH",
};

export const figmaUi = {
  CREATE_CHART: "CREATE_CHART",
  UPDATE_CHART: "UPDATE_CHART",
  EDIT_CHART: "EDIT_CHART",
  TEMPLATES: "TEMPLATES",
  MY_ACCOUNT: "MY_ACCOUNT",
};

export const figmaMessageTypes = {
  MENU_COMMAND: "@@FIGMA/MENU_COMMAND",
};

export const chartTypes = {
  LINE_CHART: "LINE_CHART",
  AREA_CHART: "AREA_CHART",
  STACKED_AREA_CHART: "STACKED_AREA_CHART",
  STREAM_GRAPH: "STREAM_GRAPH",
  VERTICAL_BAR_CHART: "VERTICAL_BAR_CHART",
  HORIZONTAL_BAR_CHART: "HORIZONTAL_BAR_CHART",
  GROUPED_BAR_CHART: "GROUPED_BAR_CHART",
  GROUPED_HORIZONTAL_BAR_CHART: "GROUPED_HORIZONTAL_BAR_CHART",
  PIE_CHART: "PIE_CHART",
  DONUT_CHART: "DONUT_CHART",
  PROGRESS_CHART: "PROGRESS_CHART",
  SPARKLINE: "SPARKLINE",
  SCATTER_PLOT: "SCATTER_PLOT",
  CANDLESTICK_CHART: "CANDLESTICK_CHART",
  HISTOGRAM: "HISTOGRAM",
  HEATMAP: "HEATMAP",
};

export const dataDistributionTypes = {
  RANDOM: "RANDOM",
  TREND_UP: "TREND_UP",
  TREND_DOWN: "TREND_DOWN",
  NORMAL_DISTRIBUTION: "NORMAL_DISTRIBUTION",
  MIXED: "MIXED",
};

/* 
fields: [
  {
    name: "Dimensions (3 for Bubbles)",
    type: "select",
    initialValue: "2",
  },
  {
    name: "Number of points",
    type: "number",
    initialValue: "20",
  },
],
 */
export const tabs = {
  [chartTypes.LINE_CHART]: {
    title: "Line chart",
    icon: assets.icons.lineChart,
  },
  [chartTypes.AREA_CHART]: {
    title: "Area chart",
    icon: assets.icons.areaChart,
  },
  [chartTypes.STACKED_AREA_CHART]: {
    title: "Stacked area chart",
    icon: assets.icons.stackedAreaChart,
  },
  [chartTypes.STREAM_GRAPH]: {
    title: "Stream graph",
    icon: assets.icons.streamGraph,
  },
  [chartTypes.VERTICAL_BAR_CHART]: {
    title: "Vertical bar chart",
    icon: assets.icons.verticalBarChart,
  },
  [chartTypes.HORIZONTAL_BAR_CHART]: {
    title: "Horizontal bar chart",
    icon: assets.icons.horizontalBarChart,
  },
  [chartTypes.GROUPED_BAR_CHART]: {
    title: "Grouped bar chart",
    icon: assets.icons.groupedBarChart,
  },
  [chartTypes.GROUPED_HORIZONTAL_BAR_CHART]: {
    title: "Grouped horizontal bar chart",
    icon: assets.icons.groupedHorizontalBarChart,
  },
  [chartTypes.PIE_CHART]: {
    title: "Pie chart",
    icon: assets.icons.pieChart,
  },
  [chartTypes.DONUT_CHART]: {
    title: "Donut chart",
    icon: assets.icons.donutChart,
  },
  [chartTypes.PROGRESS_CHART]: {
    title: "Progress chart",
    icon: assets.icons.progressChart,
  },
  [chartTypes.SPARKLINE]: {
    title: "Sparkline",
    icon: assets.icons.sparkline,
  },
  [chartTypes.SCATTER_PLOT]: {
    title: "Scatter plot",
    icon: assets.icons.scatterPlot,
  },
  [chartTypes.CANDLESTICK_CHART]: {
    title: "Candlestick chart",
    icon: assets.icons.candlestickChart,
  },
  [chartTypes.HISTOGRAM]: {
    title: "Histogram",
    icon: assets.icons.histogram,
  },
  [chartTypes.HEATMAP]: {
    title: "Heatmap",
    icon: assets.icons.heatmap,
  },
};
