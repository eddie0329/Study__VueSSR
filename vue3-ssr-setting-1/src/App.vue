<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/store">Store</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/toast">Toast</router-link> |
    <router-link to="/basicUseAsyncData">BasicAsyncData</router-link> |
    <router-link to="/multipleAsyncData">MultipleAsyncData</router-link> |
    <router-link to="/nestUseAsyncData">NestUseAsyncData</router-link> |
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.block {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
