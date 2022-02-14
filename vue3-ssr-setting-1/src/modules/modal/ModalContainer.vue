<template>
  <div>
    <component
      v-for="(modal) in modals"
      :key="modal.id"
      :is="modal.component"
      :options="modal.options"
    />
  </div>
</template>

<script setup>
import { defineExpose, ref, markRaw } from "vue";

/* Type-Def */
/** @typedef {{ 
  id: number, 
  options: {},
  component: Vue.component, 
  resolve: Promise.resolve, 
  reject: Promise.reject 
  }} Modal */

/** @type {number} */
const id = ref(0);
/** @type{Modal[]} */
const modals = ref([]);

const addModal = (component, options = {}) => {
  return new Promise((resolve, reject) => {
    modals.value.push({
      id: id.value++,
      component: markRaw(component),
      options,
      resolve,
      reject,
    });
  });
};

defineExpose({
  addModal,
});
</script>
