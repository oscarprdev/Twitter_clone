import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { postsStore } from '../posts-store';

type PostsState = ReturnType<typeof postsStore.getState>;

export const usePostsSelector: TypedUseSelectorHook<PostsState> = useSelector;
