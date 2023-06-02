<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('');

const posts = ref<{ desc: string }[]>([
  { desc: 'hello' },
  { desc: 'firebase app' },
]);

const postText = () => {
  const newDesc = { desc: text.value };
  posts.value.push(newDesc);
  text.value = '';
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
    <button
      class="bg-sky-500/100 w-14 rounded-md text-white p-1"
      @click="postText"
    >
      投稿
    </button>
    <div v-for="post in posts">
      <p>{{ post.desc }}</p>
    </div>
  </div>
</template>

<style></style>
