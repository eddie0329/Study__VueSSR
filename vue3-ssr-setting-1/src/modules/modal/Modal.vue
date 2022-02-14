<template>
  <div class="modal">
    <div class="modal-content">
      <h1>Hello Modal</h1>
      <button>Confirm</button>
      <button>Cancel</button>
      <button>Close</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: white;
  border-radius: 30px;
  width: 400px;
  height: 300px;

}
</style>