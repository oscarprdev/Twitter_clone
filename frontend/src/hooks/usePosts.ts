import { useEffect } from 'react';
import { usePostsDispatch } from '../store/posts/hooks/usePostsDispatch';
import { usePostsSelector } from '../store/posts/hooks/usePostsSelector';
import { getPosts } from '../store/posts/slices/posts-slice';
import { GET_POST_TYPES } from '../store/posts/reducers/get-post/get-posts.reducer.types';
import { getPostsUsecase } from '../features/posts/graph';

const usePosts = () => {
	const dispatch = usePostsDispatch();
	const { posts, isLoading } = usePostsSelector((state) => state.posts);

	useEffect(() => {
		const getInitialPosts = async () => {
			dispatch(getPosts({ type: GET_POST_TYPES.LOADING }));

			const response = await getPostsUsecase.getPosts();

			if (response.state === 'success') {
				dispatch(getPosts({ type: GET_POST_TYPES.GET_POSTS, posts: response.posts }));
			}
		};

		getInitialPosts();
	}, [dispatch]);

	return { posts, isLoading };
};

export default usePosts;
