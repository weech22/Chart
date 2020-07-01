import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import { reset } from "redux-form";

import {
  createChartRequest,
  createChartSuccess,
  createChartFailure,
  selectChartTabRequest,
  selectChartTabSuccess,
  syncGSRequest,
  syncGSSuccess,
  syncGSFailure,
  syncAPIRequest,
  syncAPISuccess,
  syncAPIFailure,
  uploadCSVRequest,
  uploadCSVSuccess,
  uploadCSVFailure,
  uploadJSONRequest,
  uploadJSONSuccess,
  uploadJSONFailure,
  prepareGSForSync,
} from "./duck";
import Manager from "./Manager";
import { getCurrentChart } from "./selectors";
import { forms } from "../../constants";

// TODO: Send active tab
function* createChartSaga({ payload }) {
  // TODO: pass this into handleSubmit on different tabs
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

function* syncGSRequestSaga({ payload: { syncGS, gsSheet } }) {
  const spreadsheetId = syncGS
    ? syncGS.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)[1]
    : -1;

  const apiKey = "AIzaSyAOyxH85I1NqnV2Ta-rHKn7_MZpwVBTzmk"; // TODO: store in env

  const sheetTitle = gsSheet
    ? gsSheet.value
      ? gsSheet.value
      : gsSheet
    : undefined;

  try {
    const { sheets, title, url } = yield call(Manager.fetchSpreadsheetInfo, {
      spreadsheetId,
      apiKey,
    });

    if (sheetTitle && spreadsheetId) {
      const data = yield call(Manager.fetchGoogleSpreadsheet, {
        spreadsheetId,
        sheetTitle: encodeURIComponent(sheetTitle),
        apiKey,
      });

      yield put(syncGSSuccess({ data, source: { title: sheetTitle, url } }));
    } else if (spreadsheetId) {
      if (sheets.length > 1) {
        const newSheets = sheets.map(({ properties: { title } }) => ({
          value: title,
          label: title,
        }));

        yield put(prepareGSForSync(newSheets));
      } else {
        const data = yield call(Manager.fetchGoogleSpreadsheet, {
          spreadsheetId,
          sheetTitle: "",
          apiKey,
        });

        yield put(syncGSSuccess({ data, source: { title, url } }));
      }
    }
    yield put(syncGSFailure("empty"));
  } catch (ex) {
    console.log(ex);
    yield put(syncGSFailure(ex));
  }
}

function* syncAPIRequestSaga({ payload: { syncAPI: url } }) {
  try {
    const data = yield call(Manager.fetchJSON, { url });
    yield put(syncAPISuccess({ data, source: { url, title: url } }));
  } catch (ex) {
    console.log(ex);
    yield put(syncAPIFailure(ex));
  }
}

function* uploadCSVSaga({ payload }) {
  console.log("payload, csv", payload);
  try {
    yield put(syncAPISuccess());
  } catch (ex) {
    console.log(ex);
    yield put(syncAPIFailure(ex));
  }
}

function* uploadJSONSaga({ payload }) {
  console.log("payload, json", payload);
  try {
    yield put(syncAPISuccess());
  } catch (ex) {
    console.log(ex);
    yield put(syncAPIFailure(ex));
  }
}

function* accountSaga() {
  yield all([
    takeLatest(createChartRequest, createChartSaga),
    takeLatest(selectChartTabRequest, selectChartTabSaga),
    takeLatest(syncGSRequest, syncGSRequestSaga),
    takeLatest(syncAPIRequest, syncAPIRequestSaga),
    takeLatest(uploadCSVRequest, uploadCSVSaga),
    takeLatest(uploadJSONRequest, uploadJSONSaga),
  ]);
}

export default accountSaga;
