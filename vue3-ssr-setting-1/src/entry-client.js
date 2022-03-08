import createApp from './app.js';
import modalPlugin from './modules/modal';
import toastPlugin from './modules/toast';

const { app, router, store } = createApp();

(async (_app, _router, _store) => {
  const storeInitialState = window.__INITIAL_STATE__;
  await _router.isReady();
  if (storeInitialState) _store.replaceState(storeInitialState);
  _app.use(modalPlugin).use(toastPlugin).mount('#app');
})(app, router, store);
