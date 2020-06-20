import * as R from "ramda";
import { MODULES } from "../../constants";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";

export const receiveFigmaMenuCommand = createAction(
  `${MODULES.ROUTER}/RECEIVE_FIGMA_MENU_COMMAND`
);

const currentUI = handleActions(
  {
    [receiveFigmaMenuCommand]: (_, { payload }) => payload,
  },
  null
);

const RouterReducer = combineReducers({
  currentUI,
});

export default RouterReducer;
