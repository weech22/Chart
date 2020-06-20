import React, { useEffect } from "react";
import styled from "styled-components";
import store from "./configureStore";
import { Provider } from "react-redux";
import MainView from "./components/MainView";

import { figmaMessageHandler } from "./services";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

figmaMessageHandler();

export default () => {
  useEffect(
    () => parent.postMessage({ pluginMessage: { type: "created" } }, "*"),
    []
  );

  return (
    <Provider store={store}>
      <Root>
        <MainView />
      </Root>
    </Provider>
  );
};
