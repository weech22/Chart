import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "../../configureStore";
import UpdateChart from "../../screens/UpdateChart";
import { standartTheme } from "../../styles";

const CreateChartScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <UpdateChart />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<CreateChartScreen />, document.getElementById("root"));
