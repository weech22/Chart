import * as R from "ramda";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";
import { modules, chartTypes } from "../../constants";

export const selectChartTab = createAction(`${modules.CHART}/SELECT_CHART_TAB`);

export const updateTemplate = createAction(
  `${modules.TEMPLATES}/UPDATE_TEMPLATE`
);

const currentChart = handleActions(
  {
    [selectChartTab]: (_, { payload }) => payload,
  },
  chartTypes.LINE_CHART
);

const ChartReducer = combineReducers({
  currentChart,
});

export default ChartReducer;
