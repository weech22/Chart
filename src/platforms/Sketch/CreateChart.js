import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "../../configureStore";
import CreateChart from "../../screens/CreateChart";
import { standartTheme } from "../../styles";

const CreateChartScreen = () => (
  <Provider store={store}>
    <ThemeProvider theme={standartTheme}>
      <CreateChart />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<CreateChartScreen />, document.getElementById("root"));
