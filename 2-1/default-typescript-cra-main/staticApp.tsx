import React from "react";
import { Location } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/App";

const StaticApp = (req: { url: string | Partial<Location> }) => {
  return (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
};

export default StaticApp;
