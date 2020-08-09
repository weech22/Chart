import BrowserWindow from 'sketch-module-web-view'
import { getWebview } from 'sketch-module-web-view/remote'

const webviewIdentifier = 'chart2.update-chart.webview'

// TODO: This is most likely not a view
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

  browserWindow.loadURL(require('./view/updateChart.html'))
}

export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }
}
