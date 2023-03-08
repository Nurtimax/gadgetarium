import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import Themes from "./components/UI/Themes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { injectStore } from "./config/axios-instance";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import GadgetariumSpinnerLoading from "./components/GadgetariumSpinnerLoading";

injectStore(store);

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        loading={<GadgetariumSpinnerLoading />}
        persistor={persistor}
      >
        <Themes>
          <ToastContainer className="toastify" />
          <App />
        </Themes>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
