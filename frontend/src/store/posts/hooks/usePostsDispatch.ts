import { useDispatch } from 'react-redux';
import { postsStore } from '../posts-store';

type PostsDispatch = typeof postsStore.dispatch;

export const usePostsDispatch: () => PostsDispatch = useDispatch;
