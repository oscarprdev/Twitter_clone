import { useEffect, useState } from 'react';
import { getPostsByUserUsecase } from '../features/posts/graph';
import { Post } from '../features/shared/types/posts';

export const usePostsByUser = (id: string) => {
	const [postsByUser, setPostsByUser] = useState<Post[]>([]);
	const [postsCount, setPostsCount] = useState(0);

	useEffect(() => {
		const getPostsByUser = async () => {
			const postsByUserResponse = await getPostsByUserUsecase.getPostsByUser({ userId: id });

			console.log(postsByUserResponse);

			if (postsByUserResponse.state === 'success') {
				setPostsByUser(postsByUserResponse.posts);
				setPostsCount(postsByUserResponse.postsCount);
			}
		};

		getPostsByUser();
	}, [id]);

	return {
		postsByUser,
		postsCount,
	};
};
