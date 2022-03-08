<template>
  <div>
    <h1>This is ToastPage</h1>
    <button @click="onClickSuccess">success</button>
    <button @click="onClickError">error</button>
  </div>
</template>

<script setup>
import { useToast } from '@/modules/toast';

const toast = useToast();
const onClickSuccess = () => {
  toast.addToast('hello world', { type: 'success' });
};
const onClickError = () => {
  toast.addToast('hello world', { type: 'error' });
};

</script>

<style>

</style>