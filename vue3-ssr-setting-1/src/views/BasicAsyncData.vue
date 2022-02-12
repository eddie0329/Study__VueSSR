<template>
  <div>
    <h1>This is Basic Async Data Test Page</h1>
    <ul>
      <li v-for="d in data" :key="d.id">{{ d.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const data = ref(null);

onMounted(async () => {
  if (data.value) return;
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  data.value = res.data;
});

// onServerPrefetch(async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//   data.value = res.data;
// });
console.log(data);
</script>
