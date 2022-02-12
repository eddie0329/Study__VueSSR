import createApp from "./app";

export default async (context) => {
  const { router, app, store } = createApp();
  const COMPONENTS_STATE = app.__custom_vue_ssr__;
  await router.push(context.url);
  await router.isReady();
  context.state = store.state;
  context.state.__COMPONENTS_STATE__ = COMPONENTS_STATE;
  return { app, router, store };
};
