import * as R from "ramda";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";
import { MODULES } from "../../constants";
// import { setSelectedCategory } from '../categories'

export const selectTemplate = createAction(
  `${MODULES.TEMPLATES}/SELECT_Template`
);

export const updateTemplate = createAction(
  `${MODULES.TEMPLATES}/UPDATE_Template`
);

export const createTemplate = createAction(
  `${MODULES.TEMPLATES}/CREATE_Template`
);

export const stopCreating = createAction(`${MODULES.TEMPLATES}/STOP_CREATING`);

export const updateTemplateSuccess = createAction(
  `${MODULES.TEMPLATES}/UPDATE_TEMPLATE_SUCCESS`
);

export const createTemplateRequest = createAction(
  `${MODULES.TEMPLATES}/CREATE_TEMPLATE_REQUEST`
);

export const createTemplateSuccess = createAction(
  `${MODULES.TEMPLATES}/CREATE_TEMPLATE_SUCCESS`
);

export const createTemplateFailure = createAction(
  `${MODULES.TEMPLATES}/CREATE_TEMPLATE_FAILURE`
);

export const getTemplatesRequest = createAction(
  `${MODULES.TEMPLATES}/GET_TEMPLATES_REQUEST`
);

export const getTemplatesSuccess = createAction(
  `${MODULES.TEMPLATES}/GET_TEMPLATES_SUCCESS`
);

export const getTemplatesFailure = createAction(
  `${MODULES.TEMPLATES}/GET_TEMPLATES_FAILURE`
);

export const cancelTemplatesLoading = createAction(
  `${MODULES.TEMPLATES}/CANCEL_TEMPLATES_LOADING`
);

export const clearTemplates = createAction(
  `${MODULES.TEMPLATES}/CLEAR_TemplateS`
);

export const deleteTemplateRequest = createAction(
  `${MODULES.TEMPLATES}/DELETE_TEMPLATE_REQUEST`
);

export const deleteTemplateSuccess = createAction(
  `${MODULES.TEMPLATES}/DELETE_TEMPLATE_SUCCESS`
);

export const deleteTemplateFailure = createAction(
  `${MODULES.TEMPLATES}/DELETE_TEMPLATE_FAILURE`
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
    [getTemplatesRequest]: R.T,
    [cancelTemplatesLoading]: R.F,
    [getTemplatesSuccess]: R.F,
    [getTemplatesFailure]: R.F,
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

const TemplatesReducer = combineReducers({
  selectedTemplate,
  isLoading,
  isCreatingTemplate,
});

export default TemplatesReducer;
