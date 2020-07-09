import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { standartTheme } from "@app/styles";
import Navigator from "./Navigator";
import store from "@app/configureStore";
import { outcomingMessageTypes } from "./constants";
import "@app/index.css";

import {
  messageHandler as initializeMessageHandler,
  postMessage,
} from "./services";

const Root = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
`;

export default () => {
  useEffect(() => {
    initializeMessageHandler();
    postMessage({ type: outcomingMessageTypes.APP_MOUNTED });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={standartTheme}>
        <Root>
          <Navigator />
        </Root>
      </ThemeProvider>
    </Provider>
  );
};
