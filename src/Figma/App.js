import React, { useEffect } from "react";
import styled from "styled-components";
import store from "../configureStore";
import { Provider } from "react-redux";
import Navigator from "./Navigator";
import { outcomingMessageTypes } from "./constants";

import {
  messageHandler as initializeMessageHandler,
  postMessage,
} from "./services";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default () => {
  useEffect(() => {
    initializeMessageHandler();
    postMessage({ type: outcomingMessageTypes.APP_MOUNTED });
  }, []);

  return (
    <Provider store={store}>
      <Root>
        <Navigator />
      </Root>
    </Provider>
  );
};
