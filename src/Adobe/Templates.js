import React from "react";
import { Provider } from "react-redux";

import store from "../configureStore";
import Templates from "../screens/Templates";

export default () => (
  <Provider store={store}>
    <Templates />
  </Provider>
);
