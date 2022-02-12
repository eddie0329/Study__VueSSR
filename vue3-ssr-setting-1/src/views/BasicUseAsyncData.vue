<template>
  <div class="block">
    <h1>Hello Basic Async Data</h1>
    <ul>
      <li v-for="d in data" :key="d.id">{{ d.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BasicUseAsyncData'
}
</script>


<script setup>
import { useAsyncData } from "../composables/useAsyncData";

const [data] = useAsyncData("https://jsonplaceholder.typicode.com/todos");
</script>
