import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/posts';
import { addPostReducer } from '../reducers/posts/add-post/add-post.reducer';
import { getPostsReducer } from '../reducers/posts/get-post/get-posts.reducer';

export interface PostSliceState {
	posts: Post[];
	isLoading: boolean;
}

const initialState: PostSliceState = {
	posts: [],
	isLoading: false,
};

export const PostSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: getPostsReducer,
		addPost: addPostReducer,
	},
});

export const { getPosts, addPost } = PostSlice.actions;

export default PostSlice.reducer;
