const server = require("express")();
const renderVueApp = require("./render-vue-app");
const PORT = 8080;

server.get("*", renderVueApp);

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
