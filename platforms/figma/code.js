figma.showUI(__html__, { width: 496, height: 416 });

figma.ui.onmessage = (msg) => {
  //if (msg.type === "created") {
  figma.ui.postMessage({
    type: "@@FIGMA/MENU_COMMAND",
    payload: figma.command,
  });
  // }

  //figma.closePlugin();
};
