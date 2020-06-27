import * as R from "ramda";
import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { modules } from "../../constants";

export const selectTemplate = createAction(
  `${modules.TEMPLATES}/SELECT_TEMPLATE`
);

export const updateTemplate = createAction(
  `${modules.TEMPLATES}/UPDATE_TEMPLATE`
);

const isPro = handleActions(
  {
    [updateTemplate]: R.T,
  },
  true
);

const AccountReducer = combineReducers({
  isPro,
});

export default AccountReducer;
