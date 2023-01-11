import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import Themes from "./components/UI/Themes";

const root = createRoot(document.getElementById("root"));
root.render(
  <Themes>
    <App />
  </Themes>
);
