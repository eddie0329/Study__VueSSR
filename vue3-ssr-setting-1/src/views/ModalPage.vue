<template>
<div>
  <h1>ModalPage</h1>
  <button @click="onClick">Show Modal</button>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useModal } from '../modules/modal';
import Modal from '../modules/modal/component/Modal.vue';

const name = ref('eddie');

const modal = useModal();

const onClick = async () => {
  const _name = await modal.addModal(Modal, { name });
  console.log("HELLO", _name);
};
</script>
