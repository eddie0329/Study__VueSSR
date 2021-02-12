const template = require('fs').readFileSync('./src/index.template.html', "utf-8");
const renderer = require('vue-server-renderer').createRenderer({
  template
});
const createApp = require('./src/app.js');

module.exports = async (req, res) => {
  try {
    const context = { url: req.url };
    const app = createApp(context);
    const html = await renderer.renderToString(app);

    res.send(html);
  } catch(error) {
    res.status(500).end(error.message);
  }
};