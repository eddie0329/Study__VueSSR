const server = require('express')();
const PORT = 8080;
const renderVueApp = require('./render-vue-app.js');

server.get('*', renderVueApp)

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});