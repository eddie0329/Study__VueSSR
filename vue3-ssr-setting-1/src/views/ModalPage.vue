<template>
  <div>
    <h1>ModalPage</h1>
    <button @click="onClick">Show Modal</button>
  </div>
</template>

<script setup>
import { useModal } from '../modules/modal';
import Modal from '../modules/modal/component/Modal.vue';

const modal = useModal();

const onClick = async () => {
  const _name = await modal.addModal({ component: Modal, props: { myName: 'eddie' } });
  alert(_name);
};
</script>
