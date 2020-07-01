import * as R from "ramda";
import { ENDPOINTS } from "../../API";

const fetchSpreadsheetInfo = ({ spreadsheetId, apiKey }) =>
  fetch(ENDPOINTS.FETCH_SPREADSHEET_INFO(spreadsheetId, apiKey))
    .then((res) => res.json())
    .then(({ properties: { title }, sheets, spreadsheetUrl: url }) => ({
      title,
      sheets,
      url,
    }))
    .catch((ex) => {
      throw ex;
    });

const fetchGoogleSpreadsheet = ({ spreadsheetId, sheetTitle, apiKey }) =>
  fetch(ENDPOINTS.FETCH_SPREADSHEET(spreadsheetId, sheetTitle, apiKey))
    .then((res) => res.json())
    .then((data) => data.values)
    .catch((ex) => {
      throw ex;
    });

const fetchJSON = ({ url }) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((ex) => {
      throw ex;
    });

export default { fetchSpreadsheetInfo, fetchGoogleSpreadsheet, fetchJSON };
