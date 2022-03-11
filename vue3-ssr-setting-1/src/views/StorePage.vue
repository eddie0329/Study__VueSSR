<template>
  <div>
    <h1>Store hydration test page</h1>
    <h3>storeState: {{ storeState }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const storeState = computed(() => store.state);
</script>

<style scoped>

</style>