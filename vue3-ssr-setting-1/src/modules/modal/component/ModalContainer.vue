<template>
  <div>
    <component
      v-for="modal in modals"
      :key="modal.id"
      :is="modal.component"
      :options="modal.options"
      @resolve="(value) => onResolve(value, modal.id, modal.resolve)"
    />
  </div>
</template>

<script setup>
import { defineExpose, ref, markRaw } from "vue";

/* Type-Def */
/** @typedef {{ 
  id: number, 
  options: {},
  component: import('vue').component,
  resolve: Promise.resolve, 
  reject: Promise.reject 
  }} Modal */

/** @type {import('vue').Ref<number>} */
const id = ref(0);
/** @type {import('vue').Ref<[]>} */
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

const closeModal = (id) => {
  modals.value = modals.value.filter(({ id: _id }) => id !== _id);
};

const onResolve = (value, id, resolve) => {
  resolve(value);
  closeModal(id);
};

defineExpose({
  addModal,
});
</script>
