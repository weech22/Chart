import { call, all, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  getTemplatesRequest,
  getTemplatesSuccess,
  getTemplatesFailure,
  deleteTemplateRequest,
  deleteTemplateSuccess,
  deleteTemplateFailure,
  clearTemplates,
  updateTemplate,
  createTemplateRequest,
  createTemplateFailure,
} from "./duck";

function* getTemplatesSaga() {
  try {
    yield put(getTemplatesSuccess());
  } catch (ex) {
    console.log(ex);
    yield put(getTemplatesFailure(ex.localeMessage));
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
}

function* templatesSaga() {
  yield all([
    takeLatest(getTemplatesRequest, getTemplatesSaga),
    takeLatest(deleteTemplateRequest, deleteTemplateSaga),
    takeLatest(updateTemplate, updateTemplateSaga),
    takeLatest(createTemplateRequest, createTemplateSaga),
  ]);
}

export default templatesSaga;
