import * as R from "ramda";
import { modules } from "../../constants";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";

export const receiveMenuCommand = createAction(
  `${modules.FIGMA}/RECEIVE_MENU_COMMAND`
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
