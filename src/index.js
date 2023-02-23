import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import Themes from "./components/UI/Themes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { injectStore } from "./config/axios-instance";

injectStore(store);

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Themes>
        <App />
      </Themes>
    </Provider>
  </BrowserRouter>
);
