import { createApp } from 'vue';
import ToastContainer from './components/ToastContainer.vue';
import { createAppEl } from '@/modules/utils';

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

  addToast(msg, { type }) {
    if (typeof window === 'undefined') return;
    return this.toastExposed?.addToast(msg, { type });
  }
}

/**
 * @description Composable api for toast
 * @return {ToastProxy}
 */
export const useToast = () => ToastProxy.getInstance();

export default {
  install() {
    const toastEl = createAppEl('toast');
    const toastApp = createApp(ToastContainer);
    const toastProxy = ToastProxy.getInstance();
    toastProxy.setToastExposed(toastApp.mount(toastEl));
  }
};
