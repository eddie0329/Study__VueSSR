<template>
  <div class="block">
    <h2>Test2</h2>
    <div>Length: {{ length }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { apiInstance } from '../../composables/useService';
import { useAsyncData } from "../../composables/useAsyncData";

const [data] = useAsyncData('Test2', () => apiInstance.get("todos"));
const length = computed(() => data.value?.length ?? 0);
</script>
