import assets from "./assets";

import { generateEmptyGrid } from "./utils";

export const links = {
  SUPPORT:
    "https://join.slack.com/t/chart-plugin/shared_invite/zt-61tsh8gx-C0TBYxSU8ShA~IK_v121dA",
  GS_EXAMPLE:
    "https://docs.google.com/spreadsheets/d/1UFptXqmtFexYAyX9CKIYr0x7XMtltog8_kUnrCxoRBo/edit#gid=0",
  API_EXAMPLE:
    "https://raw.githubusercontent.com/pavelkuligin/chart/master/data/data_linechart.json",
  STYLE_HOW_TO: "https://pavel-kuligin.gitbook.io/chart/templates",
  TABLE_HOW_TO: "https://pavel-kuligin.gitbook.io/chart/tabulated-data",
  API_HOW_TO: "https://pavel-kuligin.gitbook.io/chart/json-data",
  CSV_HOW_TO: "https://pavel-kuligin.gitbook.io/chart/tabulated-data",
  GS_HOW_TO: "https://pavel-kuligin.gitbook.io/chart/tabulated-data",
  JSON_HOW_TO: "https://pavel-kuligin.gitbook.io/chart/json-data",
};

export const styleSettingsTypes = {
  SETTINGS: "SETTINGS",
  LABELS: "LABELS",
  GRID: "GRID",
};

export const GRID_SIZE = 5;

export const forms = {
  RANDOM: "RANDOM",
  SYNC_DATA: "SYNC_DATA",
  SYNCED_DATA: "SYNCED_DATA",
  CUSTOM_STYLE: "CUSTOM_STYLE",
};

export const linkRegEx = new RegExp(
  "(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})"
);

export const jsonRegEx = new RegExp(".json$");

export const modules = {
  TEMPLATE: "TEMPLATE",
  CREATE_CHART: "CREATE_CHART",
  SETTINGS: "SETTINGS",
  FIGMA: "FIGMA",
  ACCOUNT: "ACCOUNT",
  ADOBE: "ADOBE",
  SKETCH: "SKETCH",
};

export const componentTypes = {
  NUM: "NUM",
  STRING: "STRING",
  COLOR: "COLOR",
  SELECT: "SELECT",
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

export const tabs = {
  RANDOM: 0,
  TABLE: 1,
  JSON: 2,
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
  { type: chartTypes.LINE_CHART, icon: assets.charts.lineChart },
  { type: chartTypes.AREA_CHART, icon: assets.charts.areaChart },
  { type: chartTypes.STACKED_AREA_CHART, icon: assets.charts.stackedAreaChart },
  { type: chartTypes.STREAM_GRAPH, icon: assets.charts.streamGraph },
  { type: chartTypes.VERTICAL_BAR_CHART, icon: assets.charts.verticalBarChart },
  {
    type: chartTypes.HORIZONTAL_BAR_CHART,
    icon: assets.charts.horizontalBarChart,
  },
  { type: chartTypes.GROUPED_BAR_CHART, icon: assets.charts.groupedBarChart },
  {
    type: chartTypes.GROUPED_HORIZONTAL_BAR_CHART,
    icon: assets.charts.groupedHorizontalBarChart,
  },
  { type: chartTypes.PIE_CHART, icon: assets.charts.pieChart },
  { type: chartTypes.DONUT_CHART, icon: assets.charts.donutChart },
  { type: chartTypes.PROGRESS_CHART, icon: assets.charts.progressChart },
  { type: chartTypes.SPARKLINE, icon: assets.charts.sparkline },
  { type: chartTypes.SCATTER_PLOT, icon: assets.charts.scatterPlot },
  { type: chartTypes.CANDLESTICK_CHART, icon: assets.charts.candlestickChart },
  { type: chartTypes.HISTOGRAM, icon: assets.charts.histogram },
  { type: chartTypes.HEATMAP, icon: assets.charts.heatmap },
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

// TODO: Move to configs
export const charts = {
  [chartTypes.LINE_CHART]: {
    title: "Line chart",
    icon: assets.charts.areaChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "lines",
          label: "Lines",
          type: componentTypes.NUM,
          defaultValue: 1,
        },
        {
          name: "points",
          label: "Points",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.AREA_CHART]: {
    title: "Area chart",
    icon: assets.charts.areaChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "areas",
          label: "Areas",
          type: componentTypes.NUM,
          defaultValue: 2,
        },
        {
          name: "points",
          label: "Points",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.STACKED_AREA_CHART]: {
    title: "Stacked area chart",
    icon: assets.charts.stackedAreaChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "areas",
          label: "Areas",
          type: componentTypes.NUM,
          defaultValue: 2,
        },
        {
          name: "points",
          label: "Points",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.STREAM_GRAPH]: {
    title: "Stream graph",
    icon: assets.charts.streamGraph,
    proTip: "",
    fields: {
      data: [
        {
          name: "areas",
          label: "Areas",
          type: componentTypes.NUM,
          defaultValue: 2,
        },
        {
          name: "points",
          label: "Points",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.VERTICAL_BAR_CHART]: {
    title: "Vertical bar chart",
    icon: assets.charts.verticalBarChart,
    proTip: "use stacks = 2 or more to get stacked bar chart.",
    fields: {
      data: [
        {
          name: "stacks",
          label: "Stacks",
          type: componentTypes.NUM,
          defaultValue: 1,
        },
        {
          name: "bars",
          label: "Bars",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.HORIZONTAL_BAR_CHART]: {
    title: "Horizontal bar chart",
    icon: assets.charts.horizontalBarChart,
    proTip: "use stacks = 2 or more to get stacked bar chart.",
    fields: {
      data: [
        {
          name: "stacks",
          label: "Stacks",
          type: componentTypes.NUM,
          defaultValue: 1,
        },
        {
          name: "bars",
          label: "Bars",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.GROUPED_BAR_CHART]: {
    title: "Grouped bar chart",
    icon: assets.charts.groupedBarChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "categories",
          label: "Categories",
          type: componentTypes.NUM,
          defaultValue: 2,
        },
        {
          name: "bars",
          label: "Bars",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.GROUPED_HORIZONTAL_BAR_CHART]: {
    title: "Horizontal grouped bar chart",
    icon: assets.charts.groupedHorizontalBarChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "categories",
          label: "Categories",
          type: componentTypes.NUM,
          defaultValue: 2,
        },
        {
          name: "bars",
          label: "Bars",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: componentTypes.SELECT,
          options: dataDistributionTypes,
          defaultValue: dataDistributionTypes.RANDOM.value,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.PIE_CHART]: {
    title: "Pie chart",
    icon: assets.charts.pieChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "segments",
          label: "Segments",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
      ],
    },
  },
  [chartTypes.DONUT_CHART]: {
    title: "Donut chart",
    icon: assets.charts.donutChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "segments",
          label: "Segments",
          type: componentTypes.NUM,
          defaultValue: 5,
        },
      ],
    },
  },
  [chartTypes.PROGRESS_CHART]: {
    title: "Progress chart",
    icon: assets.charts.progressChart,
    proTip:
      "if you use Oval or Square as a canvas, you will get circular progress bar, otherwise you will get a linear progress bar.",
  },
  [chartTypes.SPARKLINE]: {
    title: "Sparkline",
    icon: assets.charts.sparkline,
    proTip: "",
    fields: {
      data: [
        {
          name: "points",
          label: "Points",
          type: componentTypes.NUM,
          defaultValue: 20,
        },
      ],
    },
  },
  [chartTypes.SCATTER_PLOT]: {
    title: "Scatter plot",
    icon: assets.charts.scatterPlot,
    proTip: "",
    fields: {
      data: [
        {
          name: "type",
          label: "Type",
          type: componentTypes.SELECT,
          options: scatterPlotTypes,
          defaultValue: scatterPlotTypes.SCATTER.value,
        },
        {
          name: "points",
          label: "Points",
          type: componentTypes.NUM,
          defaultValue: 20,
        },
      ],
      range: [
        {
          name: "y-min",
          label: "Y-Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "y-max",
          label: "Y-Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
        {
          name: "x-min",
          label: "X-Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "x-max",
          label: "X-Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.CANDLESTICK_CHART]: {
    title: "Candlestick chart",
    icon: assets.charts.candlestickChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "candles",
          label: "Candles",
          type: componentTypes.NUM,
          defaultValue: 10,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.HISTOGRAM]: {
    title: "Histogram",
    icon: assets.charts.histogram,
    proTip: "",
    fields: {
      data: [
        {
          name: "dataPoints",
          label: "Data points",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
  [chartTypes.HEATMAP]: {
    title: "Heatmap",
    icon: assets.charts.heatmap,
    proTip: "",
    fields: {
      data: [
        {
          name: "columns",
          label: "Columns",
          type: componentTypes.NUM,
          defaultValue: 6,
        },
        {
          name: "rows",
          label: "Rows",
          type: componentTypes.NUM,
          defaultValue: 4,
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: componentTypes.NUM,
          defaultValue: 0,
        },
        {
          name: "max",
          label: "Max",
          type: componentTypes.NUM,
          defaultValue: 100,
        },
      ],
    },
  },
};
