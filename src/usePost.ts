import { ref, type InjectionKey } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './plugins/firebase';
type Post = {
  id: string;
  desc: string;
};

const defaultPosts = [
  { id: '1', desc: 'hello' },
  { id: '2', desc: 'firebase app' },
];

export const posts = (() => {
  const posts = ref<Post[]>(defaultPosts);
  const postText = (inputtingText: string) => {
    addDoc(collection(db, 'posts'), {
      desc: inputtingText,
    });
  };
  return { posts, postText };
})();

type PostsType = typeof posts;
export const postKey: InjectionKey<PostsType> = Symbol('usePosts');
