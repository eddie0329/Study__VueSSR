import createApp from "./app";

export default async ({ url }) => {
  const { router, app, store } = createApp();
  await router.push(url);
  await router.isReady();
  return { app, router, store };
};
