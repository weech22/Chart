import * as R from "ramda";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";
import { modules } from "../../constants";
// import { setSelectedCategory } from '../categories'

export const selectTemplate = createAction(
  `${modules.TEMPLATES}/SELECT_TEMPLATE`
);

export const updateTemplate = createAction(
  `${modules.TEMPLATES}/UPDATE_TEMPLATE`
);

export const createTemplate = createAction(
  `${modules.TEMPLATES}/CREATE_TEMPLATE`
);

export const stopCreating = createAction(`${modules.TEMPLATES}/STOP_CREATING`);

export const updateTemplateSuccess = createAction(
  `${modules.TEMPLATES}/UPDATE_TEMPLATE_SUCCESS`
);

export const createTemplateRequest = createAction(
  `${modules.TEMPLATES}/CREATE_TEMPLATE_REQUEST`
);

export const createTemplateSuccess = createAction(
  `${modules.TEMPLATES}/CREATE_TEMPLATE_SUCCESS`
);

export const createTemplateFailure = createAction(
  `${modules.TEMPLATES}/CREATE_TEMPLATE_FAILURE`
);

export const fetchTemplatesRequest = createAction(
  `${modules.TEMPLATES}/FETCH_TEMPLATES_REQUEST`
);

export const fetchTemplatesSuccess = createAction(
  `${modules.TEMPLATES}/FETCH_TEMPLATES_SUCCESS`
);

export const fetchTemplatesFailure = createAction(
  `${modules.TEMPLATES}/FETCH_TEMPLATES_FAILURE`
);

export const cancelTemplatesLoading = createAction(
  `${modules.TEMPLATES}/CANCEL_TEMPLATES_LOADING`
);

export const clearTemplates = createAction(
  `${modules.TEMPLATES}/CLEAR_TemplateS`
);

export const deleteTemplateRequest = createAction(
  `${modules.TEMPLATES}/DELETE_TEMPLATE_REQUEST`
);

export const deleteTemplateSuccess = createAction(
  `${modules.TEMPLATES}/DELETE_TEMPLATE_SUCCESS`
);

export const deleteTemplateFailure = createAction(
  `${modules.TEMPLATES}/DELETE_TEMPLATE_FAILURE`
);

const selectedTemplate = handleActions(
  {
    [selectTemplate]: (_, { payload }) => payload,
    [createTemplate]: R.always(null),
    [clearTemplates]: R.always(null),
  },
  null
);

const isLoading = handleActions(
  {
    [fetchTemplatesRequest]: R.T,
    [cancelTemplatesLoading]: R.F,
    [fetchTemplatesSuccess]: R.F,
    [fetchTemplatesFailure]: R.F,
    [clearTemplates]: R.F,
  },
  false
);

const isCreatingTemplate = handleActions(
  {
    [selectTemplate]: R.F,
    [createTemplate]: R.T,
    [createTemplateRequest]: R.T,
    [createTemplateSuccess]: R.F,
    [createTemplateFailure]: R.F,
    [updateTemplateSuccess]: R.F,
    [stopCreating]: R.F,
  },
  false
);

const templateList = handleActions(
  {
    [fetchTemplatesRequest]: R.always([]),
  },
  [
    { label: "Default template", value: 0 },
    { label: "Cool template", value: 2 },
  ]
);

const TemplatesReducer = combineReducers({
  selectedTemplate,
  templateList,
  isLoading,
  isCreatingTemplate,
});

export default TemplatesReducer;
