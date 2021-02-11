const server = require("express")();
const createVueApp = require('./create-vue-app');

const PORT = 8080;

server.get('*', createVueApp);

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
