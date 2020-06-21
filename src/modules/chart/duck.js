import * as R from "ramda";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";
import { modules } from "../../constants";

export const selectTemplate = createAction(
  `${modules.TEMPLATES}/SELECT_TEMPLATE`
);

export const updateTemplate = createAction(
  `${modules.TEMPLATES}/UPDATE_TEMPLATE`
);

const currentChart = handleActions(
  {
    [updateTemplate]: () => "LINE_CHART",
  },
  "LINE_CHART"
);

const ChartReducer = combineReducers({
  currentChart,
});

export default ChartReducer;
