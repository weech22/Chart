import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import { reset } from "redux-form";

import Manager from "./Manager";
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
    yield put(createChartSuccess());
  } catch (ex) {
    yield put(createChartFailure(ex));
  }
}

function* selectChartTabSaga({ payload: nextChart }) {
  try {
    const curerntChart = yield select(getCurrentChart);
    console.log("curerntChart", curerntChart);
    console.log("nextChart", nextChart);
    if (nextChart !== curerntChart) {
      yield put(reset(forms.RANDOM));
      yield put(selectChartTabSuccess(nextChart));
    }
  } catch (ex) {
    console.log("ex", ex);
    // yield put(createChartFailure(ex));
  }
}

function* accountSaga() {
  yield all([
    takeLatest(createChartRequest, createChartSaga),
    takeLatest(selectChartTabRequest, selectChartTabSaga),
  ]);
}

export default accountSaga;
