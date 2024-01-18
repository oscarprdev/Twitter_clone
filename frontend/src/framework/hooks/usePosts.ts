import { useEffect, useState } from 'react';
import { getPostsUsecase } from '../../features/posts/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

const usePosts = () => {
	const [loading, setLoading] = useState(false);
	const [offset, setOffset] = useState(10);
	const [morePostsAvailable, setMorePostsAvailable] = useState(false);

	const { posts } = useStoreSelector((state) => state.posts);

	useEffect(() => {
		const getInitialPosts = async () => {
			setLoading(true);
			await getPostsUsecase.getPosts({ limit: offset, offset: 0 });
			setLoading(false);
		};

		getInitialPosts();
	}, [offset]);

	useEffect(() => {
		if (posts.length > offset) {
			setMorePostsAvailable(true);
		} else {
			setMorePostsAvailable(false);
		}
	}, [posts, offset]);

	const getMorePosts = () => {
		setOffset(offset + 10);
	};

	return { posts, getMorePosts, morePostsAvailable, loading };
};

export default usePosts;
