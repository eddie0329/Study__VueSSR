<template>
  <div>
    <component
      v-for="modal in modals"
      :key="modal.id"
      :is="modal.component"
      v-bind="modal.props"
      @close="closeModal({ id: modal.id })"
      @resolve="(value) => onResolve(value, modal.id, modal.resolve)"
      @reject="(value) => onReject(value, modal.id, modal.reject)"
    />
  </div>
</template>

<script setup>
import { ref, markRaw } from 'vue';

/** @type {import('vue').Ref<number>} */
const id = ref(0);
/** @type {import('vue').Ref<[]>} */
const modals = ref([]);

const addModal = ({ key, component, props = {}, options = {} }) => {
  return new Promise((resolve, reject) => {
    modals.value.push({
      key,
      id: id.value++,
      component: markRaw(component),
      props,
      options,
      resolve,
      reject,
    });
  });
};

const closeModal = ({ key, id }) => {
  if (key) modals.value = modals.value.filter(({ key: _key }) => key !== _key);
  else modals.value = modals.value.filter(({ id: _id }) => id !== _id);
};

const onResolve = (value, id, resolve) => {
  resolve(value);
  closeModal({ id });
};

const onReject = (value, id, reject) => {
  reject(value);
  closeModal({ id });
};

// eslint-disable-next-line no-undef
defineExpose({
  addModal,
  closeModal
});
</script>
