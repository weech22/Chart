const BrowserWindow = require('sketch-module-web-view')
const { getWebview } = require('sketch-module-web-view/remote')

const createChartView = require('./view/createChart.html')
const updateChartView = require('./view/updateChart.html')
const editChartView = require('./view/editChart.html')
const myAccountView = require('./view/myAccount.html')
const templatesView = require('./view/templates.html')

const webviews = {
  CREATE_CHART: { id: 'CREATE_CHART', view: createChartView },
  UPDATE_CHART: { id: 'UPDATE_CHART', view: updateChartView },
  EDIT_CHART: { id: 'EDIT_CHART', view: editChartView },
  TEMPLATES: { id: 'TEMPLATES', view: templatesView },
  MY_ACCOUNT: { id: 'MY_ACCOUNT', view: myAccountView },
}

const _showView = ({ id, view }) => () => {
  _closeOtherUIs(id)

  const options = {
    identifier: id,
    width: 496,
    height: 400,
    show: false,
  }

  const browserWindow = new BrowserWindow(options)

  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
    console.log('browserWindow', browserWindow)
    browserWindow.webContents.on('externalLinkClicked', (url) => {
      NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url))
    })
  })

  browserWindow.loadURL(view)
}

const _onShutdown = (id) => () => {
  const existingWebview = getWebview(id)

  if (existingWebview) {
    existingWebview.close()
  }
}

const _closeOtherUIs = (id) => {
  Object.keys(webviews).map((webview) => {
    if (webviews[webview].id !== id) {
      _onShutdown(webviews[webview].id)()
    }
  })
}

export const createChart = _showView(webviews.CREATE_CHART)
export const updateChart = _showView(webviews.UPDATE_CHART)
export const editChart = _showView(webviews.EDIT_CHART)
export const templates = _showView(webviews.TEMPLATES)
export const myAccount = _showView(webviews.MY_ACCOUNT)

export const onCreateChartShutdown = _onShutdown(webviews.CREATE_CHART.id)
export const onUpdateChartShutdown = _onShutdown(webviews.UPDATE_CHART.id)
export const onEditChartShutdown = _onShutdown(webviews.EDIT_CHART.id)
export const onTemplatesShutdown = _onShutdown(webviews.TEMPLATES.id)
export const onMyAccountShutdown = _onShutdown(webviews.MY_ACCOUNT.id)
