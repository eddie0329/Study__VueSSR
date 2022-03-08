<template>
  <div class="toast-container">
    <div v-for="toast in state.toasts" :key="toast.id" :class="[toast.type, 'toast-wrapper']">
      <div v-html="toast.msg" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  seq: 0,
  toasts: [],
  intervalId: -1,
});

/**
 * @param {string} msg
 * @param {'success' | 'error'} type
 * @param {number} duration
 */
const addToast = (msg, { type = 'success', duration = 2 }) => {
  state.toasts.push({ id: state.seq++, msg, type, life: duration * 10 + 5 });
  if (state.intervalId === -1) this.interval = setInterval(tick, 100);
};

const tick = () => {
  state.toasts.forEach((toastInfo) => {
    toastInfo.life -= 1;
  });
  state.toasts = state.toasts.filter(toast => toast.life > 0);
  emptyCheck();
};

const emptyCheck = () => {
  if (state.toasts.length === 0) {
    clearInterval(state.intervalId);
    state.intervalId = -1;
  }
};

// eslint-disable-next-line no-undef
defineExpose({ addToast });
</script>

<style scoped>
.toast-container {
  position: fixed;
  width: 400px;
}
.toast-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  width: 400px;
  height: 60px;
}
.success { background: blue; }
.error { background: red; }
</style>