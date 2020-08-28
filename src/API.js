export const ENDPOINTS = {
  FETCH_SPREADSHEET_INFO: (spreadsheetId, apiKey) =>
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?key=${apiKey}`,

  FETCH_SPREADSHEET: (spreadsheetId, sheetTitle, apiKey) =>
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${
      sheetTitle || ''
    }${sheetTitle && '!'}A1%3AZ1000?key=${apiKey}`,
}
