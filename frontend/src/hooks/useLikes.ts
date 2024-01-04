import { useEffect, useState } from 'react';
import { getLikesUsecase } from '../features/likes/grapth';

export const useLikes = (postId: string) => {
	const [likes, setLikes] = useState(0);

	useEffect(() => {
		const updateLikes = async () => {
			const response = await getLikesUsecase.getLikes({ postId });

			if (response.state === 'success') {
				setLikes(response.likeInfo.numLikes);
			}
		};

		updateLikes();
	});

	return { likes };
};
