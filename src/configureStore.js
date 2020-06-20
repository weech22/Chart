import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./modules";

import templates from "./modules/templates";
import figma from "./modules/figma";
/* import chart from "./modules/chart";
import settings from "./modules/settings"; */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  form: formReducer,
  //chart,
  templates,
  figma,
  //settings,
});

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
