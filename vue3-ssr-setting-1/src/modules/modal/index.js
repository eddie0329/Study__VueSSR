import { createApp, getCurrentInstance } from "vue";
import ModalContainer from "./ModalContainer.vue";

export const useModal = () => {
  const modalContainer = getCurrentInstance()?.appContext?.app?._modalContainer;
  const { addModal } = modalContainer?._instance?.exposed;
  return { addModal };
};

export default {
  install(app) {
    const modalContainer = createApp(ModalContainer);
    modalContainer.mount("#modal");
    app._modalContainer = modalContainer;
  },
};
