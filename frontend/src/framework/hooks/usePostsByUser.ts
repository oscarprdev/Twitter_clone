import { useEffect } from 'react';
import { getPostsByUserUsecase } from '../../features/posts/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const usePostsByUser = (id: string) => {
	const posts = useStoreSelector((state) => state.posts.profilePosts);

	useEffect(() => {
		const getPostsByUser = async () => {
			await getPostsByUserUsecase.getPostsByUser({ userId: id });
		};

		getPostsByUser();
	}, [id]);

	return {
		posts,
	};
};
