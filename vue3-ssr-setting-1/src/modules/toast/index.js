import { defineExpose, ref } from 'vue';

class ToastProxy {
  /** @type{ToastProxy} */
  static toastProxy;
  toastExposed;

  static getInstance() {
    if (this.toastProxy) return this.toastProxy;
    else {
      this.toastProxy = new ToastProxy();
      return this.toastProxy;
    }
  }

  setToastExposed(toastExposed) {
    this.toastExposed = toastExposed;
    return this;
  }
}


export const useToast = () => {
  const count = ref(0);
  const increment = () => count.value++;
  defineExpose({ count, increment });
  // return h('h1', { innerHTML: 'Hello Toast' });
};
