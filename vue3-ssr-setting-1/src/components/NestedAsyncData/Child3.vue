<template>
  <div class="block">
    <h1>Child3</h1>
    <div>Length: {{ props.length }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({ length: { type: Number, default: 0 } });
</script>
