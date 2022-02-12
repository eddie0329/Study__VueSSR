<template>
  <div class="block">
    <ul>
      <li v-for="d in data" :key="d.id">{{ d.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onServerPrefetch } from "vue";
import axios from "axios";

const data = ref(null);

onServerPrefetch(async () => {
  console.log("HELLO SERVER PREFETCH");
  data.value = true;
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  data.value = res.data;
});

onMounted(async () => {
  if (!data.value) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    data.value = res.data;
  }
});
</script>
