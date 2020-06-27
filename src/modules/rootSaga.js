import { all, call } from "redux-saga/effects";

import { templatesSaga } from "./templates";
import { accountSaga } from "./account";
import { createChartSaga } from "./createChart";

function* rootSaga() {
  yield all([call(createChartSaga), call(templatesSaga), call(accountSaga)]);
}

export default rootSaga;
