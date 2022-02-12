const Vue = require('vue');

module.exports = (context) => {
  const app = new Vue({
    data: {
      url : context.url
    },
    methods: {
      onClick() {
        window.alert("HELLO");
      }
    },
    template: `<div>
        <h1>HELLO WOLRD</h1>
        <p>The URL {{ url }}</p>
        <button @click="onClick">HELLO</button>
      </div>
    `,
  });
  return app;
}