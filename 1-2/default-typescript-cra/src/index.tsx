import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IssueProvider } from "./Lib/states/IssueProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IssueProvider>
      <App />
    </IssueProvider>
  </React.StrictMode>
);
