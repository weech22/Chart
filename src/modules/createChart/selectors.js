import * as R from "ramda";
import { syncDataTypes } from "../../constants";

export const getForm = R.prop("form");

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

export const getIsSyncLinkValid = R.pipe(
  getCreateChart,
  R.prop("isSyncLinkValid")
);

export const getIsSyncDataValid = R.pipe(
  getCreateChart,
  R.prop("isSyncDataValid")
);

export const getIsSyncing = R.pipe(getCreateChart, R.prop("isSyncing"));

export const getIsCustomizeStyleShowing = R.pipe(
  getCreateChart,
  R.prop("isCustomizeStyleShowing")
);

export const getCurrentTab = R.pipe(getCreateChart, R.prop("currentTab"));

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

export const getTableGrid = R.pipe(getCreateChart, R.prop("tableGrid"));

export const getTableSize = (state) => {
  const tableGrid = state.createChart.tableGrid;

  return {
    cols: tableGrid[0].length - 1,
    rows: tableGrid.length - 1,
  };
};

export const getIsColorPickerShowing = R.pipe(
  getCreateChart,
  R.prop("isColorPickerShowing")
);

export const getDocumentColors = R.pipe(
  getCreateChart,
  R.prop("documentColors")
);

export const getCurrentlyEditedColor = R.pipe(
  getCreateChart,
  R.prop("currentlyEditedColor")
);
