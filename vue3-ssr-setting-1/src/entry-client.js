import createApp from "./app.js";

const { app, router, store } = createApp();

(async (_app, _router, _store) => {
  const storeInitialState = window.__INITIAL_STATE__;
  await _router.isReady();
  if (storeInitialState) _store.replaceState(storeInitialState);
  _app.mount("#app");
})(app, router, store);
