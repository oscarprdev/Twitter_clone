import { useEffect, useState } from 'react';
import { getLikesUsecase, toggleLikeUsecase } from '../../features/likes/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useLikes = (postId: string) => {
	const [likes, setLikes] = useState(0);
	const [isLiked, setIsLiked] = useState(false);
	const userLogged = useStoreSelector((state) => state.users.userLogged);

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
			setIsLiked(await toggleLikeUsecase.isUserAlreadyLiked({ postId, userId: userLogged.id }));
		};

		updateIsLiked();
	}, [likes, postId, userLogged]);

	const toggleLikes = async () => {
		const response = await toggleLikeUsecase.toggleLike({ postId, userId: userLogged.id });

		if (response.state === 'success') {
			setLikes(response.numLikes);
		}
	};

	return { likes, isLiked, toggleLikes };
};
