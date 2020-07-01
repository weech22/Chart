import * as R from "ramda";
import { tabs, syncDataTypes } from "../../constants";

const getCreateChart = R.prop("createChart");
export const getSyncedData = R.pipe(getCreateChart, R.prop("syncedData"));

export const getCurrentChart = R.pipe(getCreateChart, R.prop("currentChart"));

export const getIsSyncGSShowing = R.pipe(
  getCreateChart,
  R.prop("isSyncGSShowing")
);

export const getIsSyncAPIShowing = R.pipe(
  getCreateChart,
  R.prop("isSyncAPIShowing")
);

export const getIsCustomStyleShowing = R.pipe(
  getCreateChart,
  R.prop("isCustomStyleShowing")
);

export const getIsAPISynced = (state) => {
  const syncedData = state.createChart.syncedData;

  return Boolean(
    syncedData.data !== null && syncedData.type === syncDataTypes.API
  );
};

export const getIsGSSynced = (state) => {
  const syncedData = state.createChart.syncedData;

  return Boolean(
    syncedData.data !== null && syncedData.type === syncDataTypes.GS
  );
};

export const getIsCSVUploaded = (state) => {
  const syncedData = state.createChart.syncedData;

  return Boolean(
    syncedData.data !== null && syncedData.type === syncDataTypes.CSV
  );
};

export const getIsJSONUploaded = (state) => {
  const syncedData = state.createChart.syncedData;

  return Boolean(
    syncedData.data !== null && syncedData.type === syncDataTypes.JSON
  );
};

export const getGSSheets = R.pipe(getCreateChart, R.prop("gsSheets"));