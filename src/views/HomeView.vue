<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';

import PostLists from '../components/postLists.vue';
import Form from '@/components/Form.vue';
import { postKey } from '@/usePost';
import { db } from '../plugins/firebase.js';
import { collection, doc, deleteDoc } from 'firebase/firestore';
const state = inject(postKey);
if (!state) {
  throw new Error('state is undefined');
}

const { posts } = state;

const postDelete = (id: string) => {
  deleteDoc(doc(collection(db, 'posts'), id));
};
</script>

<template>
  <div class="text-center">
    <h1 class="m-10 text-lg font-bold">SNS</h1>

    <Form>投稿</Form>
    <PostLists :posts="posts" @post-delete="postDelete" />
  </div>
</template>

<style></style>
