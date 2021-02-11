const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

module.exports = async (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>Hello World: {{ url }}</div>`
  });

  try {
    const appHtml = await renderer.renderToString(app);
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello SSR</title>
        </head>
        <body>${appHtml}</body>
      </html>
    `);
  } catch (err) {
    res.status(500).end(err.message);
  }
}