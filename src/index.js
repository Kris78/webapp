import "@material/button/dist/mdc.button.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/typography/dist/mdc.typography.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApiProvider } from "./contexts/ApiContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
