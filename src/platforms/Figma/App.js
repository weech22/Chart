import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { standartTheme } from "../../styles";
import Navigator from "./Navigator";
import store from "../../configureStore";
import { outcomingMessageTypes } from "./constants";
import "../../index.css";

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
