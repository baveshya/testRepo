import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import '../node_modules/bootstrap/bootstrap-min.css';
import store from "./store";
import WizardForm from "./WizardForm";
import Header from "./header";
import "./index.css";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <Header />
    </div>
  </Provider>,
  rootEl
);
