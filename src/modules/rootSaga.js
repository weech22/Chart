import { all, call } from "redux-saga/effects";

import { templatesSaga } from "./templates";
//import { chartSaga } from "./chart";
//import { settingsSaga } from "./settings";

function* rootSaga() {
  yield all([/* call(settingsSaga), call(chartSaga),  */ call(templatesSaga)]);
}

export default rootSaga;
