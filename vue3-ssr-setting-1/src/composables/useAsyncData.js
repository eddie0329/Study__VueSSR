import { ref, onMounted, onServerPrefetch, getCurrentInstance } from "vue";
import axios from "axios";
import { useVueApp } from "../app";

export const useAsyncData = (url) => {
  const data = ref(null);
  const vueApp = useVueApp();
  const {
    type: { name },
  } = getCurrentInstance();

  onServerPrefetch(async () => {
    const res = await axios.get(url);
    data.value = res.data;
    vueApp[name] = res.data;
  });

  onMounted(async () => {
    const __COMPONENTS_STATE__ =
      window?.__INITIAL_STATE__?.__COMPONENTS_STATE__;
    /* Did not entry on server */
    if (!__COMPONENTS_STATE__) return;
    /* Server side rendered once */
    if (__COMPONENTS_STATE__[name]) {
      console.log("HELLO SERVER");
      data.value = __COMPONENTS_STATE__[name];
      delete window.__INITIAL_STATE__.__COMPONENTS_STATE__[name];
    } else {
      /* Client side rendered */
      console.log("HELLO CLIENT");
      const res = await axios.get(url);
      data.value = res.data;
    }
  });

  return [data];
};
