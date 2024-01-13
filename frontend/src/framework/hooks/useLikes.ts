import { useEffect, useState } from 'react';
import { getLikesUsecase, toggleLikeUsecase } from '../../features/likes/graph';
import { USER_ID } from '../../features/shared/constants/constants';

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
	}, [postId]);

	useEffect(() => {
		const updateIsLiked = async () => {
			setIsLiked(await toggleLikeUsecase.isUserAlreadyLiked({ postId, userId: USER_ID }));
		};

		updateIsLiked();
	}, [likes, postId]);

	const toggleLikes = async () => {
		const response = await toggleLikeUsecase.toggleLike({ postId, userId: USER_ID });

		if (response.state === 'success') {
			setLikes(response.numLikes);
		}
	};

	return { likes, isLiked, toggleLikes };
};
