<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';

import PostLists from '../components/postLists.vue';
import Button from '@/components/Button.vue';
import { postKey } from '@/usePost';

const state = inject(postKey);
if (!state) {
  throw new Error('state is undefined');
}

const { posts } = state;

const postDelete = (currentPost: number) => {
  posts.value = posts.value.filter((post) => post.id !== currentPost);
};
</script>

<template>
  <div class="text-center">
    <h1 class="m-10 text-lg font-bold">SNS</h1>

    <Button>投稿</Button>
    <PostLists :posts="posts" @post-delete="postDelete" />
  </div>
</template>

<style></style>
