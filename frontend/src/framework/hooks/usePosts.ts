import { useEffect, useState } from 'react';
import { getPosts } from '../store/slices/posts-slice';
import { GET_POST_TYPES } from '../store/reducers/posts/get-post/get-posts.reducer.types';
import { getPostsUsecase } from '../../features/posts/graph';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { useStoreSelector } from '../store/hooks/useSelector';

const usePosts = () => {
	const [offset, setOffset] = useState(10);
	const [morePostsAvailable, setMorePostsAvailable] = useState(false);

	const dispatch = useStoreDispatch();
	const { posts, isLoading } = useStoreSelector((state) => state.posts);

	useEffect(() => {
		const getInitialPosts = async () => {
			dispatch(getPosts({ type: GET_POST_TYPES.LOADING }));

			const response = await getPostsUsecase.getPosts({ limit: offset, offset: 0 });

			if (response.state === 'success') {
				dispatch(getPosts({ type: GET_POST_TYPES.GET_POSTS, posts: response.posts }));

				if (response.postsCount > offset) {
					setMorePostsAvailable(true);
				} else {
					setMorePostsAvailable(false);
				}
			}
		};

		getInitialPosts();
	}, [offset]);

	const getMorePosts = () => {
		setOffset(offset + 10);
	};

	return { posts, isLoading, getMorePosts, morePostsAvailable };
};

export default usePosts;
