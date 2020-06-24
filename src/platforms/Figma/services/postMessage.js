const postMessage = (pluginMessage) => {
  parent.postMessage({ pluginMessage }, "*");
};

export default postMessage;
