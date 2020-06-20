import React from "react";
import { Provider } from "react-redux";

import store from "../configureStore";
import CreateChart from "../screens/CreateChart";

export default () => (
  <Provider store={store}>
    <CreateChart />
  </Provider>
);
