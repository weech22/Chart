import React from "react";
import { Provider } from "react-redux";

import store from "../../configureStore";
import MyAccount from "../../screens/MyAccount";

export default () => (
  <Provider store={store}>
    <MyAccount />
  </Provider>
);
