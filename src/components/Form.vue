<script setup lang="ts">
import { postKey } from '@/usePost';
import { inject, onMounted, ref } from 'vue';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../plugins/firebase';

const text = ref<string>('');

const state = inject(postKey);
if (!state) {
  throw new Error('state is undefined');
}

const { posts, postText } = state;

const getText = (input: any) => {
  postText(input);
  text.value = '';
};

onMounted(() => {
  // マウントした時にpushで配列に入れて展開
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    posts.value = [];
    querySnapshot.forEach((doc) => {
      const post: { id: string; desc: string } = {
        id: doc.id,
        desc: doc.data().desc,
      };

      posts.value.push(post);
    });
  });
});
</script>
<template>
  <input
    class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
    placeholder="メッセージ"
    type="text"
    v-model="text"
  />
  <button
    class="bg-sky-500/100 w-14 rounded-md text-white p-1"
    @click="getText(text)"
  >
    <slot></slot>
  </button>
</template>
