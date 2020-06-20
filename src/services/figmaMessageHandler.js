import store from "../configureStore";
import { receiveFigmaMenuCommand } from "../modules/router";
import { FIGMA_MESSAGES_TYPES } from "../constants";

export default () => {
  window.onmessage = ({
    data: {
      pluginMessage: { type, payload },
    },
  }) => {
    switch (type) {
      case FIGMA_MESSAGES_TYPES.MENU_COMMAND:
        store.dispatch(receiveFigmaMenuCommand(payload));
      default:
        console.log("type: ", type, " payload: ", payload);
    }
  };
};
