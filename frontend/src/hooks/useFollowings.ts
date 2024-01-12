import { useEffect, useState } from 'react';
import { getFollowingUsecase } from '../features/followers/graph';
import { User } from '../features/shared/types/user';

export const useFollowings = (id: string) => {
	const [followingCount, setFollowingCount] = useState(0);
	const [followings, setFollowings] = useState<User[]>();

	useEffect(() => {
		const getFollowing = async () => {
			const followingResponse = await getFollowingUsecase.getFollowing({ userId: id });

			if (followingResponse.state === 'success') {
				setFollowingCount(followingResponse.count);
				setFollowings(followingResponse.following);
			}
		};

		getFollowing();
	}, [id]);

	return {
		followingCount,
		followings,
	};
};
