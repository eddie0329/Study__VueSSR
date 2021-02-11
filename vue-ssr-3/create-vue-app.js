const template = require('fs').readFileSync('./src/index.template.html', "utf-8");
const renderer = require('vue-server-renderer').createRenderer({
  template
});
const createApp = require('./src/app.js');

const content = {
  title: "HELLO SSR",
  meta: `
    <meta name="keyworld" content="eddie,vue,ssr">
    <meta name="title" content="vuessr">
  `
};

module.exports = async (req, res) => {
  try {
    const context = { url: req.url };
    const app = createApp(context);
    const html = await renderer.renderToString(app, content);

    res.send(html);
  } catch(error) {
    res.status(500).end(error.message);
  }
};