import * as R from "ramda";

const getChart = R.prop("chart");

export const getCurrentChart = R.pipe(getChart, R.prop("currentChart"));
