import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import { reset } from "redux-form";

import {
  createChartRequest,
  createChartSuccess,
  createChartFailure,
  selectChartTabRequest,
  selectChartTabSuccess,
} from "./duck";
import { getCurrentChart } from "./selectors";
import { forms } from "../../constants";

function* createChartSaga({ payload }) {
  try {
    const currentChart = yield select(getCurrentChart);
    const chartToCreate = { ...payload, chartType: currentChart };

    console.log("chartToCreate", chartToCreate);
    yield put(createChartSuccess());
  } catch (ex) {
    console.log(ex);
    yield put(createChartFailure(ex));
  }
}

function* selectChartTabSaga({ payload: nextChart }) {
  const currentChart = yield select(getCurrentChart);
  if (nextChart !== currentChart) {
    yield put(reset(forms.RANDOM));
    yield put(selectChartTabSuccess(nextChart));
  }
}

function* accountSaga() {
  yield all([
    takeLatest(createChartRequest, createChartSaga),
    takeLatest(selectChartTabRequest, selectChartTabSaga),
  ]);
}

export default accountSaga;
