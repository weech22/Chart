import * as R from "ramda";
import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { modules, chartTypes } from "../../constants";

export const selectChartTabRequest = createAction(
  `${modules.CHART}/SELECT_CHART_TAB_REQUEST`
);

export const selectChartTabSuccess = createAction(
  `${modules.CHART}/SELECT_CHART_TAB_SUCCESS`
);

export const createChartRequest = createAction(
  `${modules.CHART}/CREATE_CHART_REQUEST`
);

export const createChartSuccess = createAction(
  `${modules.CHART}/CREATE_CHART_SUCCESS`
);

export const createChartFailure = createAction(
  `${modules.CHART}/CREATE_CHART_FAILURE`
);

const currentChart = handleActions(
  {
    [selectChartTabSuccess]: (_, { payload }) => payload,
  },
  chartTypes.LINE_CHART
);

const isCreatingChart = handleActions(
  {
    [createChartRequest]: (_, { payload }) => R.T,
    [createChartSuccess]: (_, { payload }) => R.F,
    [createChartFailure]: (_, { payload }) => R.F,
  },
  false
);

const ChartReducer = combineReducers({
  currentChart,
  isCreatingChart,
});

export default ChartReducer;
