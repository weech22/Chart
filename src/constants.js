import assets from "./assets";

export const forms = {
  RANDOM: "RANDOM",
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
  RANDOM: { value: "RANDOM", label: "Random" },
  TREND_UP: { value: "TREND_UP", label: "Trend up" },
  TREND_DOWN: { value: "TREND_DOWN", label: "Trend down" },
  NORMAL_DISTRIBUTION: {
    value: "NORMAL_DISTRIBUTION",
    label: "Normal distribution",
  },
  MIXED: { value: "MIXED", label: "Mixed" },
};

export const tabs = {
  [chartTypes.LINE_CHART]: {
    title: "Line chart",
    icon: assets.icons.lineChart,
    proTip: "",
    fields: {
      data: [
        {
          name: "lines",
          label: "Lines",
          type: "input",
        },
        {
          name: "points",
          label: "Points",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "points",
          label: "Points",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "points",
          label: "Points",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "points",
          label: "Points",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "bars",
          label: "Bars",
          type: "input",
        },
        {
          name: "dataDistribution",
          label: "Data distribution",
          type: "select",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "points",
          label: "Points",
          type: "input",
        },
      ],
      range: [
        {
          name: "y-min",
          label: "Y-Min",
          type: "input",
        },
        {
          name: "y-max",
          label: "Y-Max",
          type: "input",
        },
        {
          name: "x-min",
          label: "X-Min",
          type: "input",
        },
        {
          name: "x-max",
          label: "X-Max",
          type: "input",
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
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
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
        },
        {
          name: "rows",
          label: "Rows",
          type: "input",
        },
      ],
      range: [
        {
          name: "min",
          label: "Min",
          type: "input",
        },
        {
          name: "max",
          label: "Max",
          type: "input",
        },
      ],
    },
  },
};
