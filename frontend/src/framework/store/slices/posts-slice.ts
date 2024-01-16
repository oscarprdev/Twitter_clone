import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../../features/shared/domain/types/posts';
import { addPostReducer } from '../reducers/posts/add-post/add-post.reducer';
import { getPostsReducer } from '../reducers/posts/get-post/get-posts.reducer';
import { getProfilePostsReducer } from '../reducers/posts/get-profile-posts/get-profile-posts.reducer';

export interface PostSliceState {
	posts: Post[];
	profilePosts: Post[];
}

const initialState: PostSliceState = {
	posts: [],
	profilePosts: [],
};

export const PostSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: getPostsReducer,
		addPost: addPostReducer,
		getProfilePosts: getProfilePostsReducer,
	},
});

export const { getPosts, addPost, getProfilePosts } = PostSlice.actions;

export default PostSlice.reducer;
