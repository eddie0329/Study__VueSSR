const path = require("path");
const fs = require("fs");
const express = require("express");
const { renderToString } = require('@vue/server-renderer');
const PORT = process.env.PORT || 3000;
const manifest = require("../dist/server/ssr-manifest.json");
const appPath = path.join(__dirname, "../dist", "server", manifest["app.js"]);
const App = require(appPath).default;
const server = express();

server.use(
  "/img",
  express.static(path.join(__dirname, "../dist/client", "img"))
);
server.use("/js", express.static(path.join(__dirname, "../dist/client", "js")));
server.use(
  "/manifest.json",
  express.static(path.join(__dirname, "../dist/client", "manifest.json"))
);
server.use(
  "/css",
  express.static(path.join(__dirname, "../dist/client", "css"))
);
server.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../dist/client", "favicon.ico"))
);

server.get("*", async (req, res) => {
  const context = { url: req.url };
  const { app } = await App(context);
  let appContent = await renderToString(app);

  fs.readFile(
    path.join(__dirname, "../dist/client/index.html"),
    (err, html) => {
      if (err) throw err;

      appContent = `<div id="app">${appContent}</div>`;

      html = html
        .toString()
        .replace('<div id="app"></div>', `${appContent}`);
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    }
  );
});

server.listen(PORT, () => {
  console.log(`Running App at port: ${PORT} 🚀`);
});
