import { useEffect } from 'react';
import { getPosts } from '../store/slices/posts-slice';
import { GET_POST_TYPES } from '../store/reducers/posts/get-post/get-posts.reducer.types';
import { getPostsUsecase } from '../features/posts/graph';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { useStoreSelector } from '../store/hooks/useSelector';

const usePosts = () => {
	const dispatch = useStoreDispatch();
	const { posts, isLoading } = useStoreSelector((state) => state.posts);

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
