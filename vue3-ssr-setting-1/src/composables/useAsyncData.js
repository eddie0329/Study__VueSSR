import { ref, onMounted, onServerPrefetch } from 'vue';
import { err } from '../utils';
import { useVueApp } from '../app';

const errLog = (msg) => err(`UseAsync Error: ${msg}`);

export const useAsyncData = (key = errLog('key is required'), promise) => {
  const data = ref(null);
  const vueApp = useVueApp();

  /* Server Side */
  onServerPrefetch(async () => {
    const res = await promise();
    data.value = res;
    vueApp[key] = res;
  });

  /* Client Side */
  onMounted(async () => {
    const __COMPONENTS_STATE__ = window?.__INITIAL_STATE__?.__COMPONENTS_STATE__ ?? {};
    if (__COMPONENTS_STATE__[key]) { /* Server side rendered once */
      console.log('HELLO SERVER');
      data.value = __COMPONENTS_STATE__[key];
      delete window.__INITIAL_STATE__.__COMPONENTS_STATE__[key];
    } else { /* Client side rendered */
      console.log('HELLO CLIENT');
      data.value = await promise();
    }
  });

  return {
    data
  };
};
