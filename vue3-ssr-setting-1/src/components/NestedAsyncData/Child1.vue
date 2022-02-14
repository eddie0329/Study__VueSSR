<template>
<div class="block">
  <h1>Child1</h1>
  <Child2 />
</div>
</template>

<script setup>
import Child2 from './Child2.vue';
</script>

<style>
.block {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
}
</style>
