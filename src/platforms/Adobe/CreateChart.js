import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "@app/configureStore";
import CreateChart from "@app/screens/CreateChart";
import { standartTheme } from "@app/styles";

export default () => {
  return (
    <div
      style={{
        width: "530px",
        height: "410px",
      }}
    >
      <Provider store={store}>
        <ThemeProvider theme={standartTheme}>
          <CreateChart />
        </ThemeProvider>
      </Provider>
    </div>
  );
};
