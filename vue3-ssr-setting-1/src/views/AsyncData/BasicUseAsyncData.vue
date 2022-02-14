<template>
  <div class="block">
    <h1>Hello Basic Async Data</h1>
    <ul>
      <li v-for="d in data" :key="d.id">{{ d.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useAsyncData } from "../../composables/useAsyncData";
import { apiInstance } from "../../composables/useService";

const [data] = useAsyncData('BasicUseAsyncData', () => apiInstance.get('todos'));
</script>
