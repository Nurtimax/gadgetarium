import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import Themes from "./components/UI/Themes";

<<<<<<< HEAD
const root = createRoot(document.getElementById("root"));
root.render(<App />);
=======
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Themes>
    <App />
  </Themes>
);
>>>>>>> development
