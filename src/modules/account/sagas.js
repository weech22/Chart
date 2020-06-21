import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import Manager from "./Manager";

/* function* fetchTemplatesSaga() {
  console.log("fetch saga");
  try {
    const templates = yield call(Manager.fetchTemplates);
    console.log("3232323232", templates);
    // yield put(getTemplatesSuccess());
  } catch (ex) {
    console.log(ex);
    // yield put(getTemplatesFailure(ex.localeMessage));
  }
}

function* deleteTemplateSaga({ payload: id }) {
  try {
  } catch (ex) {
    //
  }
}

function* updateTemplateSaga({ payload }) {
  try {
  } catch (ex) {
    //
  }
}

function* createTemplateSaga({ payload }) {
  try {
  } catch (ex) {
    yield put(createTemplateFailure(ex));
  }
} */

function* accountSaga() {
  yield all([
    /*   takeLatest(fetchTemplatesRequest, fetchTemplatesSaga),
    takeLatest(deleteTemplateRequest, deleteTemplateSaga),
    takeLatest(updateTemplate, updateTemplateSaga),
    takeLatest(createTemplateRequest, createTemplateSaga), */
  ]);
}

export default accountSaga;
