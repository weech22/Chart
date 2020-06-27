import * as R from "ramda";
import { tabs } from "../../constants";

const getCreateChart = R.prop("createChart");

export const getCurrentChart = R.pipe(getCreateChart, R.prop("currentChart"));

export const getIsSyncGSShowing = R.pipe(
  getCreateChart,
  R.prop("isSyncGSShowing")
);

export const getIsSyncAPIShowing = R.pipe(
  getCreateChart,
  R.prop("isSyncAPIShowing")
);

export const getIsCustomStyleShowing = R.pipe(
  getCreateChart,
  R.prop("isCustomStyleShowing")
);
