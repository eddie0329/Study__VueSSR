import createApp from "./app.js";

const { app, router, store } = createApp();

(async (_app, _router) => {
  // const storeIntialState = window.__INITIAL_DATA__;
  await _router.isReady();
  // if (storeIntialState) _store.replaceState(storeIntialState);
  _app.mount("#app");
})(app, router, store);
