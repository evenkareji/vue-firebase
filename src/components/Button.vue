<script setup lang="ts">
const emit = defineEmits(['post-text']);
const getText = () => {
  emit('post-text');
};
</script>
<template>
  <button
    class="bg-sky-500/100 w-14 rounded-md text-white p-1"
    @click="getText()"
  >
    <slot></slot>
  </button>
</template>
