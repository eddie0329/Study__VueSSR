<template>
  <Teleport to="body">
    <h1>Hello Toast</h1>
  </Teleport>
</template>

<script setup>
import { defineExpose, ref } from "vue";

const a = 1;
const b = ref(2);

defineExpose({ a, b });
</script>

<style>

</style>