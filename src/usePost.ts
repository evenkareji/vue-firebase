import { ref, type InjectionKey } from 'vue';

type Post = {
  id: number;
  desc: string;
};

const defaultPosts = [
  { id: 1, desc: 'hello' },
  { id: 2, desc: 'firebase app' },
];
// export const posts = ref<Post[]>(defaultPosts);
// export const postText = (inputtingText: string) => {
//   const newDesc = { id: new Date().getTime(), desc: inputtingText };

//   posts.value.push(newDesc);
// };
export const posts = (() => {
  const posts = ref<Post[]>(defaultPosts);
  const postText = (inputtingText: string) => {
    const newDesc = { id: new Date().getTime(), desc: inputtingText };

    posts.value.push(newDesc);
  };
  return { posts, postText };
})();

type PostsType = typeof posts;
export const postKey: InjectionKey<PostsType> = Symbol('usePosts');
