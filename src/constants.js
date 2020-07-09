import assets from "./assets";
import { generateEmptyGrid } from "./utils";

export const styleSettingsTypes = {
  SETTINGS: "SETTINGS",
  LABELS: "LABELS",
  GRID: "GRID",
};

export const GRID_SIZE = 10;

export const forms = {
  RANDOM: "RANDOM",
  SYNC_DATA: "SYNC_DATA",
  SYNCED_DATA: "SYNCED_DATA",
};

export const modules = {
  TEMPLATE: "TEMPLATE",
  CREATE_CHART: "CREATE_CHART",
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

export const freeChartTypes = [chartTypes.LINE_CHART, chartTypes.AREA_CHART];

export const navigationTabs = [
  { type: chartTypes.LINE_CHART, icon: assets.icons.lineChart },
  { type: chartTypes.AREA_CHART, icon: assets.icons.areaChart },
  { type: chartTypes.STACKED_AREA_CHART, icon: assets.icons.stackedAreaChart },
  { type: chartTypes.STREAM_GRAPH, icon: assets.icons.streamGraph },
  { type: chartTypes.VERTICAL_BAR_CHART, icon: assets.icons.verticalBarChart },
  {
    type: chartTypes.HORIZONTAL_BAR_CHART,
    icon: assets.icons.horizontalBarChart,
  },
  { type: chartTypes.GROUPED_BAR_CHART, icon: assets.icons.groupedBarChart },
  {
    type: chartTypes.GROUPED_HORIZONTAL_BAR_CHART,
    icon: assets.icons.groupedHorizontalBarChart,
  },
  { type: chartTypes.PIE_CHART, icon: assets.icons.pieChart },
  { type: chartTypes.DONUT_CHART, icon: assets.icons.donutChart },
  { type: chartTypes.PROGRESS_CHART, icon: assets.icons.progressChart },
  { type: chartTypes.SPARKLINE, icon: assets.icons.sparkline },
  { type: chartTypes.SCATTER_PLOT, icon: assets.icons.scatterPlot },
  { type: chartTypes.CANDLESTICK_CHART, icon: assets.icons.candlestickChart },
  { type: chartTypes.HISTOGRAM, icon: assets.icons.histogram },
  { type: chartTypes.HEATMAP, icon: assets.icons.heatmap },
];

export const dataDistributionTypes = {
  RANDOM: { value: "RANDOM", label: "Random" },
  TREND_UP: { value: "TREND_UP", label: "Trend up" },
  TREND_DOWN: { value: "TREND_DOWN", label: "Trend down" },
  NORMAL_DISTRIBUTION: {
    value: "NORMAL_DISTRIBUTION",
    label: "Normal distribution",
  },
  MIXED: { value: "MIXED", label: "Mixed" },
};

export const scatterPlotTypes = {
  SCATTER: { value: "SCATTER", label: "Scatter" },
  BUBBLE: { value: "BUBBLE", label: "Bubble" },
};

export const syncDataTypes = {
  API: "API",
  JSON: "JSON",
  CSV: "CSV",
  GS: "GS",
};

export const tabs = {
  [chartTypes.LINE_CHART]: {
    title: "Line chart",
    proTip: "",
    fields: {
      data: [
        {
          name: "lines",
          label: "Lines",
          type: "input",
          defaultValue: 1,
        },
        {
          name: "points",
          label: "Points",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.AREA_CHART]: {
    title: "Area chart",
    icon: assets.icons.areaChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "areas",
          label: "Areas",
          type: "input",
          defaultValue: 2,
        },
        {
          name: "points",
          label: "Points",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.STACKED_AREA_CHART]: {
    title: "Stacked area chart",
    icon: assets.icons.stackedAreaChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "areas",
          label: "Areas",
          type: "input",
          defaultValue: 2,
        },
        {
          name: "points",
          label: "Points",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.STREAM_GRAPH]: {
    title: "Stream graph",
    icon: assets.icons.streamGraph,
    proTip: "",
    fields: {
      data: [
        {
          name: "areas",
          label: "Areas",
          type: "input",
          defaultValue: 2,
        },
        {
          name: "points",
          label: "Points",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.VERTICAL_BAR_CHART]: {
    title: "Vertical bar chart",
    icon: assets.icons.verticalBarChart,
    proTip: "use stacks = 2 or more to get stacked bar chart.",
    fields: {
      data: [
        {
          name: "stacks",
          label: "Stacks",
          type: "input",
          defaultValue: 1,
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.HORIZONTAL_BAR_CHART]: {
    title: "Horizontal bar chart",
    icon: assets.icons.horizontalBarChart,
    proTip: "use stacks = 2 or more to get stacked bar chart.",
    fields: {
      data: [
        {
          name: "stacks",
          label: "Stacks",
          type: "input",
          defaultValue: 1,
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.GROUPED_BAR_CHART]: {
    title: "Grouped bar chart",
    icon: assets.icons.groupedBarChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "categories",
          label: "Categories",
          type: "input",
          defaultValue: 2,
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.GROUPED_HORIZONTAL_BAR_CHART]: {
    title: "Horizontal grouped bar chart",
    icon: assets.icons.groupedHorizontalBarChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "categories",
          label: "Categories",
          type: "input",
          defaultValue: 2,
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.PIE_CHART]: {
    title: "Pie chart",
    icon: assets.icons.pieChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "segments",
          label: "Segments",
          type: "input",
          defaultValue: 5,
        },
      ],
    },
  },
  [chartTypes.DONUT_CHART]: {
    title: "Donut chart",
    icon: assets.icons.donutChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "segments",
          label: "Segments",
          type: "input",
          defaultValue: 5,
        },
      ],
    },
  },
  [chartTypes.PROGRESS_CHART]: {
    title: "Progress chart",
    icon: assets.icons.progressChart,
    proTip:
      "if you use Oval or Square as a canvas, you will get circular progress bar, otherwise you will get a linear progress bar.",
  },
  [chartTypes.SPARKLINE]: {
    title: "Sparkline",
    icon: assets.icons.sparkline,
    proTip: "",
    fields: {
      data: [
        {
          name: "points",
          label: "Points",
          type: "input",
          defaultValue: 20,
        },
      ],
    },
  },
  [chartTypes.SCATTER_PLOT]: {
    title: "Scatter plot",
    icon: assets.icons.scatterPlot,
    proTip: "",
    fields: {
      data: [
        {
          name: "type",
          label: "Type",
          type: "select",
          options: scatterPlotTypes,
          defaultValue: scatterPlotTypes.SCATTER.value,
        },
        {
          name: "points",
          label: "Points",
          type: "input",
          defaultValue: 20,
        },
      ],
      range: [
        {
          name: "y-min",
          label: "Y-Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "y-max",
          label: "Y-Max",
          type: "input",
          defaultValue: 100,
        },
        {
          name: "x-min",
          label: "X-Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "x-max",
          label: "X-Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.CANDLESTICK_CHART]: {
    title: "Candlestick chart",
    icon: assets.icons.candlestickChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "candles",
          label: "Candles",
          type: "input",
          defaultValue: 10,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.HISTOGRAM]: {
    title: "Histogram",
    icon: assets.icons.histogram,
    proTip: "",
    fields: {
      data: [
        {
          name: "dataPoints",
          label: "Data points",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.HEATMAP]: {
    title: "Heatmap",
    icon: assets.icons.heatmap,
    proTip: "",
    fields: {
      data: [
        {
          name: "columns",
          label: "Columns",
          type: "input",
          defaultValue: 6,
        },
        {
          name: "rows",
          label: "Rows",
          type: "input",
          defaultValue: 4,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: "input",
          defaultValue: 100,
        },
      ],
    },
  },
};
