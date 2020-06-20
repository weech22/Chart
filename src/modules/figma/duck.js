import * as R from "ramda";
import { MODULES } from "../../constants";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";

export const receiveMenuCommand = createAction(
  `${MODULES.FIGMA}/RECEIVE_MENU_COMMAND`
);

const currentUIScreen = handleActions(
  {
    [receiveMenuCommand]: (_, { payload }) => payload,
  },
  null
);

const FigmaReducer = combineReducers({
  currentUIScreen,
});

export default FigmaReducer;
