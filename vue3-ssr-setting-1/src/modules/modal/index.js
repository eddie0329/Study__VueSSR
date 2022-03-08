import { createApp } from 'vue';
import ModalContainer from './components/ModalContainer.vue';
import { createAppEl } from '@/modules/utils';

class ModalProxy {
  /** @type {ModalProxy} */
  static modalProxy;
  modalExposed;

  static getInstance() {
    if (this.modalProxy) return this.modalProxy;
    else {
      this.modalProxy = new ModalProxy();
      return this.modalProxy;
    }
  }

  setModalExposed(modalExposed) {
    this.modalExposed = modalExposed;
    return this;
  }

  addModal({ key, component, props, options }) {
    if (typeof window === 'undefined') return;
    return this.modalExposed?.addModal({ key, component, props, options });
  }
}

/**
 * @description Composable api for modal
 * @return {ModalProxy}
 */
export const useModal = () => ModalProxy.getInstance();

/* Plugin */
export default {
  install() {
    const modalEl = createAppEl('modal');
    const modalApp = createApp(ModalContainer);
    const modalProxy = ModalProxy.getInstance();
    modalProxy.setModalExposed(modalApp.mount(modalEl));
  },
};
