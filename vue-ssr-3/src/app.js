const Vue = require("vue");

module.exports = (context) => {
  const app = new Vue({
    data: {
      url: context.url,
      input: ''
    },
    template: `<div>
			<p>The visited URL is: {{ url }}</p>
			<button @click="sayHello">Hello</button>
      <h1>{{ input }}</h1>
      <input v-model="input" />
		</div>`,
    methods: {
      sayHello() {
        window.alert("Hello!");
        console.log("hello!");
      },
    },
  });

  return app;
};
