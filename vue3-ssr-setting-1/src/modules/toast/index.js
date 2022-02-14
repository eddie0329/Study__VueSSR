import { defineExpose, ref } from 'vue';

export const useToast = () => {
  const count = ref(0);
  const increment = () => count.value++;
  defineExpose({ count, increment });
  // return h('h1', { innerHTML: 'Hello Toast' });
};
