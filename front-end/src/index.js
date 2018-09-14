import { AppContainer } from "react-hot-loader";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import "./styles.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const store = configureStore();
const history = createBrowserHistory();
console.log(store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);
