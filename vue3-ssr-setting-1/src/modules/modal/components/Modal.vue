<template>
  <div class="modal">
    <div class="modal-bg" />
    <div class="modal-content">
      <h1>Hello Modal</h1>
      <h3>{{ myName }}</h3>
      <button @click="$emit('resolve', 'sam')">Confirm</button>
      <button @click="$emit('reject')">Cancel</button>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  myName: { type: String, default: '' },
});
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.modal-content {
  z-index: 1;
  background: white;
  border-radius: 30px;
  width: 400px;
  height: 300px;

}
</style>