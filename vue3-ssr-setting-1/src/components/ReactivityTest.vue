<template>
  <div class="block">
    <h1>Basic Reactivity Test</h1>
    <h3>What is my name? {{ name }}</h3>
    <input type="text" v-model="name" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("eddie");
</script>
