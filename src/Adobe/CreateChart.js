import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "../configureStore";
import CreateChart from "../screens/CreateChart";
import { standartTheme } from "../styles";

export default () => (
  <div
    style={{
      width: "496px",
      height: "400px",
    }}
  >
    <Provider store={store}>
      <ThemeProvider theme={standartTheme}>
        <CreateChart />
      </ThemeProvider>
    </Provider>
  </div>
);
