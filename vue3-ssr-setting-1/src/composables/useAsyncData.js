// import { onServerPrefetch, onMounted, ref } from "vue";
import { ref } from "vue";

export const useAsyncData = () => new Promise((resolve) => {
  const data = ref('hello');
  resolve([data]);
});
