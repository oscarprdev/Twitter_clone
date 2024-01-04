import { useEffect, useState } from 'react';
import { getLikesUsecase, toggleLikeUsecase } from '../features/likes/graph';

export const useLikes = (postId: string) => {
	const [likes, setLikes] = useState(0);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		const updateLikes = async () => {
			const response = await getLikesUsecase.getLikes({ postId });

			if (response.state === 'success') {
				setLikes(response.likeInfo.numLikes);
			}
		};

		updateLikes();
	});

	useEffect(() => {
		const updateIsLiked = async () => {
			setIsLiked(await toggleLikeUsecase.isUserAlreadyLiked({ postId, userId: 'c6471755-03fc-4a38-badd-43ba864bd98e' }));
		};

		updateIsLiked();
	}, [likes]);

	const toggleLikes = async () => {
		const response = await toggleLikeUsecase.toggleLike({ postId, userId: 'c6471755-03fc-4a38-badd-43ba864bd98e' });

		if (response.state === 'success') {
			const likesResponse = await getLikesUsecase.getLikes({ postId });

			if (likesResponse.state === 'success') {
				setLikes(likesResponse.likeInfo.numLikes);
			}
		}
	};

	return { likes, isLiked, toggleLikes };
};
