import { createApp } from 'vue';
import ModalContainer from './component/ModalContainer.vue';

class ModalProxy {
  /** @type {ModalProxy} */
  static modalProxy;
  modalContainer;

  static getInstance() {
    if (this.modalProxy) return this.modalProxy;
    else {
      this.modalProxy = new ModalProxy();
      return this.modalProxy;
    }
  }

  setModalContainer(modalContainer) {
    this.modalContainer = modalContainer;
    return this;
  }

  addModal(component, options) {
    return this.modalContainer?.addModal(component, options);
  }
}

/**
 * @description Composable api
 * @return {ModalProxy}
 */
export const useModal = () => ModalProxy.getInstance();

/* Plugin */
export default {
  install() {
    const modalContainer = createApp(ModalContainer);
    ModalProxy.getInstance().setModalContainer(modalContainer.mount('#modal'));
  },
};
