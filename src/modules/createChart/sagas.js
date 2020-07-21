import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import { reset } from "redux-form";
import * as Papa from "papaparse";

import { uploadFile } from "@app/platforms/Adobe/utils";
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
  clearTable,
  transposeTable,
  updateTable,
  useThisStyleRequest,
  useThisStyleSuccess,
  useThisStyleFailure,
  fetchDocumentColorsRequest,
  fetchDocumentColorsSuccess,
  fetchDocumentColorsFailure,
} from "./duck";

import Manager from "./Manager";
import { getCurrentChart, getTableGrid, getGSSheets } from "./selectors";
import { forms } from "@app/constants";
import {
  isAdobe,
  readFileContent,
  transpose,
  clearGrid,
  getTitleFromUrl,
  isValidJSONLink,
  isValidGSLink,
  getSheetLink,
} from "@app/utils";

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

function* syncGSRequestSaga({ payload: { syncGS, gsSheetId } }) {
  if (isValidGSLink(syncGS)) {
    const spreadsheetId = syncGS
      ? syncGS.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)[1] // TODO: Move to utils
      : -1;

    const apiKey = "AIzaSyAOyxH85I1NqnV2Ta-rHKn7_MZpwVBTzmk"; // TODO: store in env

    const gsSheets = yield select(getGSSheets); // {value: id, title: 'str'}

    const gsSheetById = gsSheets.find(
      (sheet) => Number(sheet.value) === Number(gsSheetId)
    );

    const sheetTitle = gsSheetById ? gsSheetById.label : undefined;

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

        console.log("data", data);
        console.log("sheetTitle", sheetTitle);
        console.log(
          "getSheetLink(spreadsheetId, gsSheetId)",
          getSheetLink(spreadsheetId, gsSheetId)
        );
        console.log("gsSheetId", gsSheetId);

        yield put(
          syncGSSuccess({
            data,
            source: {
              title: sheetTitle,
              url: getSheetLink(spreadsheetId, gsSheetId),
            },
          })
        );
      } else if (spreadsheetId) {
        if (sheets.length > 1) {
          const newSheets = sheets.map(
            ({ properties: { title, sheetId } }) => ({
              value: sheetId,
              label: title,
            })
          );

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
  } else {
    yield put(syncGSFailure({ error: "link" }));
  }
}

function* syncAPIRequestSaga({ payload: { syncAPI: url } }) {
  try {
    if (isValidJSONLink(url)) {
      const data = yield call(Manager.fetchJSON, { url });
      yield put(
        syncAPISuccess({ data, source: { url, title: getTitleFromUrl(url) } })
      );
    } else {
      yield put(syncAPIFailure({ error: "link" }));
    }
  } catch (ex) {
    console.log(ex);
    yield put(syncAPIFailure(ex));
  }
}

function* uploadCSVSaga({ payload: FileList }) {
  try {
    if (isAdobe) {
      const { fileName, fileContent } = yield call(uploadFile, "csv");
      const data = Papa.parse(fileContent).data;
      yield put(uploadCSVSuccess({ data, source: { title: fileName } }));
    } else {
      const file = FileList[0];
      const fileContent = yield call(readFileContent, file);
      const fileName = file.name;
      const data = Papa.parse(fileContent).data;
      yield put(uploadCSVSuccess({ data, source: { title: fileName } }));
    }
  } catch (ex) {
    yield put(uploadCSVFailure(ex));
  }
}

function* uploadJSONSaga({ payload: FileList }) {
  try {
    if (isAdobe) {
      const { fileName, fileContent } = yield call(uploadFile, "json");
      const data = JSON.parse(fileContent);
      yield put(uploadJSONSuccess({ data, source: { title: fileName } }));
    } else {
      const file = FileList[0];
      const fileContent = yield call(readFileContent, file);
      const fileName = file.name;
      const data = JSON.parse(fileContent);
      yield put(uploadJSONSuccess({ data, source: { title: fileName } }));
    }
  } catch (ex) {
    console.log(ex);
    yield put(uploadJSONFailure(ex));
  }
}

function* clearTableSaga() {
  try {
    const table = yield select(getTableGrid);
    const clearedTable = yield call(clearGrid, table);
    yield put(updateTable(clearedTable));
  } catch (ex) {
    console.log(ex);
  }
}

function* transposeTableSaga() {
  try {
    const table = yield select(getTableGrid);

    const trasposedTable = yield call(transpose, table);

    yield put(updateTable(trasposedTable));
  } catch (ex) {
    console.log(ex);
  }
}

function* useThisStyleSaga({ payload }) {
  console.log("use this style", payload);
  try {
    // TODO: If preSelectedTemplateId === -1 {
    // submit form or whatever
    // } else { templateId }

    yield put(useThisStyleSuccess(payload));
  } catch (ex) {
    console.log(ex);
  }
}

function* fetchDocumentColorsSaga({ payload }) {
  try {
    const documentColors = [
      {
        h: 38,
        s: 0.27,
        l: 0.12,
        a: 1,
      },
      {
        h: 111,
        s: 0.14,
        l: 0.93,
        a: 1,
      },
      {
        h: 333,
        s: 0.2,
        l: 0.33,
        a: 0.3,
      },
      {
        h: 13,
        s: 0.2,
        l: 0.33,
        a: 0.3,
      },
      {
        h: 189,
        s: 0.67,
        l: 0.11,
        a: 1,
      },
      {
        h: 227,
        s: 0.19,
        l: 0.87,
        a: 1,
      },
    ];
    yield put(fetchDocumentColorsSuccess(documentColors));
  } catch (ex) {
    console.log(ex);
    yield put(fetchDocumentColorsFailure(ex));
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
    takeLatest(clearTable, clearTableSaga),
    takeLatest(transposeTable, transposeTableSaga),
    takeLatest(useThisStyleRequest, useThisStyleSaga),
    takeLatest(fetchDocumentColorsRequest, fetchDocumentColorsSaga),
  ]);
}

export default accountSaga;
