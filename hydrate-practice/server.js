const server = require("express")();
const template = require("fs").readFileSync("./index.template.html", "utf-8");
const context = {
  title: 'HELLO SSR',
  meta: `
    <meta name="keyword" content="vue,ssr">
    <meta name="description" content="vue ssr demo" >
  `
}
const { createBundleRenderer } = require('vue-server-renderer');
// const renderer = require("vue-server-renderer").createRenderer({
//   template,
// });
const renderer = createBundleRenderer(serverBundle)
const createApp = require('./src/app.js');



// constants
const PORT = 8080;

server.get("*", (req, res) => {
  const content = { url: req.url };
  const app = createApp(content);

  renderer
    .renderToString(app, context)
    .then((html) => {
      res.end(html);
    })
    .catch((err) => {
      if (err.code === 404) {
        res.status(404).end('Page not Found');
      } else {
        res.status(500).end("Internal Server Error");
      }
    });
});

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT ${PORT}`);
});
