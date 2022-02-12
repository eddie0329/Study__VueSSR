import { createApp, createSSRApp, getCurrentInstance } from "vue";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";

/**
 * Returns the context
 */
export const useVueApp = () => {
  const vm = getCurrentInstance();
  return vm.appContext.app.__custom_vue_ssr__;
};

export default () => {
  const IS_SSR = typeof window === "undefined";
  const app = (IS_SSR ? createSSRApp : createApp)(App);
  const router = createRouter();
  const store = createStore();
  app.__custom_vue_ssr__ = {};
  app.use(router);
  app.use(store);
  return { app, router, store };
};
