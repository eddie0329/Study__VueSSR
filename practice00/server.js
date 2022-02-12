const server = require('express')();
const renderVueApp = require('./render-vue-app');

server.get("*", renderVueApp);
server.listen(3000, () => {
  console.log("RUNNING");
});
