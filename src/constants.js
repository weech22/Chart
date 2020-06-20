import assets from "./assets";

export const FORMS = {
  LOGIN: "LOGIN",
  PRODUCT_EDITOR: "PRODUCT_EDITOR",
  DRIVER: "DRIVER",
  PROMOTION_EDITOR: "promotion_editor",
};

export const MODULES = {
  TEMPLATE: "TEMPLATE",
  CHART: "CHART",
  SETTINGS: "SETTINGS",
  ROUTER: "ROUTER",
};

export const FIGMA_UI = {
  CREATE_CHART: "CREATE_CHART",
  UPDATE_CHART: "UPDATE_CHART",
  EDIT_CHART: "EDIT_CHART",
  TEMPLATES: "TEMPLATES",
  MY_ACCOUNT: "MY_ACCOUNT",
};

export const FIGMA_MESSAGES_TYPES = {
  MENU_COMMAND: "@@FIGMA/MENU_COMMAND",
};

export const tabs = [
  {
    title: "Line chart",
    icon: assets.icons.lineChart,
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
  },
];
