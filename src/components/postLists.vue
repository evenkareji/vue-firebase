<script setup lang="ts">
type Post = {
  id: number;
  desc: string;
};

type Props = {
  posts: Post[];
};

defineProps<Props>();
const emit = defineEmits(['post-delete']);
const getDeleteId = (id: number) => {
  console.log(id);
  emit('post-delete', id);
};

// <{ id: number; desc: string }[]>
</script>
<template>
  <div class="mt-5" v-for="post in posts" :key="post.id">
    <div class="flex justify-center items-center">
      <p class="mr-1">{{ post.desc }}</p>
      <button
        @click="getDeleteId(post.id)"
        class="p-1 rounded-md w-18 bg-red-500 text-white"
      >
        削除
      </button>
    </div>
  </div>
</template>
