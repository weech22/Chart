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
export const tabs = [
  {
    title: "Line chart",
    type: chartTypes.LINE_CHART,
    icon: assets.icons.lineChart,
  },
  {
    title: "Area chart",
    type: chartTypes.AREA_CHART,
    icon: assets.icons.areaChart,
  },
  {
    title: "Stacked area chart",
    type: chartTypes.STACKED_AREA_CHART,
    icon: assets.icons.stackedAreaChart,
  },
  {
    title: "Stream graph",
    type: chartTypes.SREAM_GRAPH,
    icon: assets.icons.streamGraph,
  },

  {
    title: "Vertical bar chart",
    type: chartTypes.VERTICAL_BAR_CHART,
    icon: assets.icons.verticalBarChart,
  },
  {
    title: "Horizontal bar chart",
    type: chartTypes.HORIZONTAL_BAR_CHART,
    icon: assets.icons.horizontalBarChart,
  },
  {
    title: "Grouped bar chart",
    type: chartTypes.GROUPED_BAR_CHART,
    icon: assets.icons.groupedBarChart,
  },
  {
    title: "Grouped horizontal bar chart",
    type: chartTypes.GROUPED_HORIZONTAL_BAR_CHART,
    icon: assets.icons.groupedHorizontalBarChart,
  },

  {
    title: "Pie chart",
    type: chartTypes.PIE_CHART,
    icon: assets.icons.pieChart,
  },
  {
    title: "Donut chart",
    type: chartTypes.DONUT_CHART,
    icon: assets.icons.donutChart,
  },
  {
    title: "Progress chart",
    type: chartTypes.PROGRESS_CHART,
    icon: assets.icons.progressChart,
  },
  {
    title: "Sparkline",
    type: chartTypes.SPARKLINE,
    icon: assets.icons.sparkline,
  },

  {
    title: "Scatter plot",
    type: chartTypes.SCATTER_PLOT,
    icon: assets.icons.scatterPlot,
  },
  {
    title: "Candlestick chart",
    type: chartTypes.CANDLESTICK_CHART,
    icon: assets.icons.candlestickChart,
  },
  {
    title: "Histogram",
    type: chartTypes.HISTOGRAM,
    icon: assets.icons.histogram,
  },
  {
    title: "Heatmap",
    type: chartTypes.HEATMAP,
    icon: assets.icons.heatmap,
  },
];
