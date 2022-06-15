import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>
);
