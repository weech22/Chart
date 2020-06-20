import store from "../../configureStore";
import { receiveMenuCommand } from "../../modules/figma";
import { incomingMessageTypes } from "../constants";

export default () => {
  window.onmessage = ({
    data: {
      pluginMessage: { type, payload },
    },
  }) => {
    switch (type) {
      case incomingMessageTypes.MENU_COMMAND:
        store.dispatch(receiveMenuCommand(payload));
      default:
        console.log("type: ", type, " payload: ", payload);
    }
  };
};
