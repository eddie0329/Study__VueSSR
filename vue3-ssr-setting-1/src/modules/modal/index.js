import { createApp, getCurrentInstance } from "vue";
import ModalContainer from "./component/ModalContainer.vue";

export const useModal = () => {
  const modalContainer = getCurrentInstance()?.appContext?.app?._modalContainer;
  return modalContainer?._instance?.exposed ?? {};
};

export default {
  install(app) {
    const modalContainer = createApp(ModalContainer);
    app._modalContainer = modalContainer;
    modalContainer.mount("#modal");
  },
};
