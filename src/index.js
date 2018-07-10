import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import Form from "./components/Form";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Form />
  </Provider>,
  rootElement
);
