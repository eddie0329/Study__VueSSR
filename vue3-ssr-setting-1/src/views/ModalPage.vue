<template>
<div>
  <h1>ModalPage</h1>
  <button @click="onClick">Show Modal</button>
</div>
</template>

<script setup>
import { useModal } from '../modules/modal';
import Modal from '../modules/modal/Modal.vue';

const { addModal } = useModal();

const onClick = async () => {
  await addModal(Modal, { name: 'eddie' });
};
</script>

<style>

</style>