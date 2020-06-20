figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  //if (msg.type === "created") {
  figma.ui.postMessage({
    type: "@@FIGMA/MENU_COMMAND",
    payload: figma.command,
  });
  // }

  //figma.closePlugin();
};
