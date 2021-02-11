const Vue = require("vue");
const template = require('fs').readFileSync('./index.template.html', 'utf-8');
const renderer = require('vue-server-renderer').createRenderer({
  template
});

module.exports = async (req, res) => {
  try{
    const app = new Vue({
      data: {
        url: req.url
      },
      template: `<div>Hello World : {{ url }}</div>`
    });

    const html = await renderer.renderToString(app);
    res.send(html);
  }catch(err) {
    res.status(500).end(err.message);
  }
};