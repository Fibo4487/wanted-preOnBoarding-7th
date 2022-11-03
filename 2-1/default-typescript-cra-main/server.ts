import express from "express";
import path from "path";
import { Helmet } from "react-helmet";
import { renderToString } from "react-dom/server";
import staticApp from "./staticApp";

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("*", (req, res) => {
  const app = renderToString(staticApp(req));

  const helmet = Helmet.renderStatic();

  res.set("content-type", "text/html");
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no">
          <meta name="google" content="notranslate">
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
      </html>
  `);
});

app.listen(3003, () => console.log("Server started http://localhost:3003"));
