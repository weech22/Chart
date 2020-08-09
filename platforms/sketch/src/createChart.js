const BrowserWindow = require('sketch-module-web-view')
const { getWebview } = require('sketch-module-web-view/remote')

const view = require('./view/createChart.html')

const webviewIdentifier = 'chart2.create-chart.webview'

export default function () {
  const options = {
    identifier: webviewIdentifier,
    width: 496,
    height: 400,
    show: false,
  }

  const browserWindow = new BrowserWindow(options)

  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  browserWindow.loadURL(view)
}

export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }
}
