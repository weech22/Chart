import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import Manager from "./Manager";
import {
  fetchTemplatesRequest,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  deleteTemplateRequest,
  deleteTemplateSuccess,
  deleteTemplateFailure,
  clearTemplates,
  updateTemplate,
  createTemplateRequest,
  createTemplateFailure,
} from "./duck";

function* fetchTemplatesSaga() {
  try {
    const templates = [
      { label: "Default template", value: 0 },
      { label: "Cool template", value: 1 },
    ]; // yield call(Manager.fetchTemplates);

    yield put(fetchTemplatesSuccess(templates));
  } catch (ex) {
    console.log(ex);
    yield put(fetchTemplatesFailure(ex));
  }
}

function* deleteTemplateSaga({ payload: id }) {
  try {
    deleteTemplateSuccess();
  } catch (ex) {
    deleteTemplateFailure();
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
}

function* templatesSaga() {
  yield all([
    takeLatest(fetchTemplatesRequest, fetchTemplatesSaga),
    takeLatest(deleteTemplateRequest, deleteTemplateSaga),
    takeLatest(updateTemplate, updateTemplateSaga),
    takeLatest(createTemplateRequest, createTemplateSaga),
  ]);
}

export default templatesSaga;
