import * as R from "ramda";
import { tabs } from "../../constants";

const getChart = R.prop("chart");

export const getCurrentChart = R.pipe(getChart, R.prop("currentChart"));
