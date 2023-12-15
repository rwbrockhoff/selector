import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import "./index.css";
import App from "./Containers/App";
import { searchRobots, requestRobots } from "./reducers/searchRobots";

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
