import BrowserWindow from "sketch-module-web-view";
import { getWebview } from "sketch-module-web-view/remote";
import UI from "sketch/ui";

const webviewIdentifier = "chart2.update-chart.webview";

export default function () {
  const options = {
    identifier: webviewIdentifier,
    width: 496,
    height: 400,
    show: false,
  };

  const browserWindow = new BrowserWindow(options);

  browserWindow.once("ready-to-show", () => {
    browserWindow.show();
  });

  const webContents = browserWindow.webContents;

  webContents.on("did-finish-load", () => {
    UI.message("UI loaded!");
  });

  // add a handler for a call from web content's javascript
  webContents.on("nativeLog", (s) => {
    UI.message(s);
    webContents
      .executeJavaScript(`setRandomNumber(${Math.random()})`)
      .catch(console.error);
  });

  browserWindow.loadURL(require("./Resources/createChart.html"));
}

export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier);
  if (existingWebview) {
    existingWebview.close();
  }
}
