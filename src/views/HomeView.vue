<script setup lang="ts">
import { ref, type Ref } from 'vue';

import PostLists from '../components/postLists.vue';
import Button from '@/components/Button.vue';
type Post = {
  id: number;
  desc: string;
};
const text = ref<string>('');

const posts: Ref<Post[]> = ref([
  { id: 1, desc: 'hello' },
  { id: 2, desc: 'firebase app' },
]);

const postText = () => {
  const newDesc = { id: new Date().getTime(), desc: text.value };

  posts.value.push(newDesc);
  text.value = '';
};

const postDelete = (currentPost: number) => {
  posts.value = posts.value.filter((post) => post.id !== currentPost);
};
</script>

<template>
  <div class="text-center">
    <h1 class="m-10 text-lg font-bold">SNS</h1>

    <input
      class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
      placeholder="John"
      type="text"
      v-model="text"
    />
    <Button @post-text="postText">投稿</Button>
    <PostLists :posts="posts" @post-delete="postDelete" />
  </div>
</template>

<style></style>
