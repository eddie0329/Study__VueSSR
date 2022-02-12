import { createApp, createSSRApp } from "vue";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";

export default () => {
  const IS_SSR = typeof window === "undefined";
  const app = (IS_SSR ? createSSRApp : createApp)(App);
  const router = createRouter();
  const store = createStore();
  app.use(router);
  app.use(store);
  return { app, router, store };
};
