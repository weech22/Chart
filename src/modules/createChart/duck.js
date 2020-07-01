import * as R from "ramda";
import { createAction, handleActions, combineActions } from "redux-actions";
import { combineReducers } from "redux";
import { modules, chartTypes, syncDataTypes } from "../../constants";

export const selectChartTabRequest = createAction(
  `${modules.CREATE_CHART}/SELECT_CHART_TAB_REQUEST`
);

export const selectChartTabSuccess = createAction(
  `${modules.CREATE_CHART}/SELECT_CHART_TAB_SUCCESS`
);

export const createChartRequest = createAction(
  `${modules.CREATE_CHART}/CREATE_CHART_REQUEST`
);

export const createChartSuccess = createAction(
  `${modules.CREATE_CHART}/CREATE_CHART_SUCCESS`
);

export const createChartFailure = createAction(
  `${modules.CREATE_CHART}/CREATE_CHART_FAILURE`
);

export const startSyncGS = createAction(
  `${modules.CREATE_CHART}/START_SYNC_GS`
);

export const stopSyncGS = createAction(`${modules.CREATE_CHART}/STOP_SYNC_GS`);

export const syncGSRequest = createAction(
  `${modules.CREATE_CHART}/SYNC_GS_REQUEST`
);

export const syncGSSuccess = createAction(
  `${modules.CREATE_CHART}/SYNC_GS_SUCCESS`
);

export const syncGSFailure = createAction(
  `${modules.CREATE_CHART}/SYNC_GS_FAILURE`
);

export const startSyncAPI = createAction(
  `${modules.CREATE_CHART}/START_SYNC_API`
);

export const stopSyncAPI = createAction(
  `${modules.CREATE_CHART}/STOP_SYNC_API`
);

export const syncAPIRequest = createAction(
  `${modules.CREATE_CHART}/SYNC_API_REQUEST`
);

export const syncAPISuccess = createAction(
  `${modules.CREATE_CHART}/SYNC_API_SUCCESS`
);

export const syncAPIFailure = createAction(
  `${modules.CREATE_CHART}/SYNC_API_FAILURE`
);

export const startCustomStyle = createAction(
  `${modules.CREATE_CHART}/START_CUSTOM_STYLE`
);

export const stopCustomStyle = createAction(
  `${modules.CREATE_CHART}/STOP_CUSTOM_STYLE`
);

export const startAddColor = createAction(
  `${modules.CREATE_CHART}/START_ADD_COLOR`
);

export const stopAddColor = createAction(
  `${modules.CREATE_CHART}/STOP_ADD_COLOR`
);

export const uploadCSVRequest = createAction(
  `${modules.CREATE_CHART}/UPLOAD_CSV_REQUEST`
);

export const uploadCSVSuccess = createAction(
  `${modules.CREATE_CHART}/UPLOAD_CSV_SUCCESS`
);

export const uploadCSVFailure = createAction(
  `${modules.CREATE_CHART}/UPLOAD_CSV_FAILURE`
);

export const uploadJSONRequest = createAction(
  `${modules.CREATE_CHART}/UPLOAD_JSON_REQUEST`
);

export const uploadJSONSuccess = createAction(
  `${modules.CREATE_CHART}/UPLOAD_JSON_SUCCESS`
);

export const uploadJSONFailure = createAction(
  `${modules.CREATE_CHART}/UPLOAD_JSON_FAILURE`
);

export const discardSyncedData = createAction(
  `${modules.CREATE_CHART}/DISCARD_SYNCED_DATA`
);

export const prepareGSForSync = createAction(
  `${modules.CREATE_CHART}/PREPARE_GS_FOR_SYNC`
);

// TODO: saveColor, editColor?

export const clearTable = createAction(`${modules.CREATE_CHART}/CLEAR_TABLE`);

export const openExternalLink = createAction(
  `${modules.CREATE_CHART}/OPEN_EXTERNAL_LINK`
);

const currentChart = handleActions(
  {
    [selectChartTabSuccess]: (_, { payload }) => payload,
  },
  chartTypes.LINE_CHART
);

const isCreatingChart = handleActions(
  {
    [createChartRequest]: R.T,
    [createChartSuccess]: R.F,
    [createChartFailure]: R.F,
  },
  false
);

const isSyncGSShowing = handleActions(
  {
    [startSyncGS]: R.T,
    [stopSyncGS]: R.F,
    [syncGSSuccess]: R.F,
  },
  false
);

const isSyncAPIShowing = handleActions(
  {
    [startSyncAPI]: R.T,
    [stopSyncAPI]: R.F,
    [syncAPISuccess]: R.F,
  },
  false
);

const isCustomStyleShowing = handleActions(
  {
    [startCustomStyle]: R.T,
    [stopCustomStyle]: R.F,
  },
  false
);

const isAddColorShowing = handleActions(
  {
    [startAddColor]: R.T,
    [stopAddColor]: R.F,
  },
  false
);

const gsSheets = handleActions(
  {
    [prepareGSForSync]: (_, { payload }) => payload,
    [stopSyncGS]: R.always([]),
    [syncGSSuccess]: R.always([]),
    [discardSyncedData]: R.always([]),
    [syncAPIRequest]: R.always([]),
  },
  []
);

const syncedData = handleActions(
  {
    [syncGSSuccess]: (_, { payload: { data, source } }) => ({
      data,
      source,
      type: syncDataTypes.GS,
    }),
    [syncAPISuccess]: (_, { payload: { data, source } }) => ({
      data,
      source,
      type: syncDataTypes.API,
    }),
    [uploadJSONSuccess]: (_, { payload: { data, source } }) => ({
      data,
      source,
      type: syncDataTypes.JSON,
    }),
    [uploadCSVSuccess]: (_, { payload: { data, source } }) => ({
      data,
      source,
      type: syncDataTypes.CSV,
    }),
    [discardSyncedData]: () => ({ data: null, type: null }),
  },
  { data: null, type: null }
);

const CreateChartReducer = combineReducers({
  currentChart,
  isCreatingChart,
  isSyncGSShowing,
  isSyncAPIShowing,
  isCustomStyleShowing,
  isAddColorShowing,
  gsSheets,
  syncedData,
});

export default CreateChartReducer;
