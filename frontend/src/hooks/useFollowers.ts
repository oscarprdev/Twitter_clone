import { useEffect, useState } from 'react';
import { getFollowersUsecase } from '../features/followers/graph';
import { User } from '../features/shared/types/user';

export const useFollowers = (id: string) => {
	const [followersCount, setFollowersCount] = useState(0);
	const [followers, setFollowers] = useState<User[]>([]);

	useEffect(() => {
		const getFollowers = async () => {
			const followersResponse = await getFollowersUsecase.getFollowers({ userId: id });

			if (followersResponse.state === 'success') {
				setFollowersCount(followersResponse.count);
				setFollowers(followersResponse.followers);
			}
		};

		getFollowers();
	}, [id]);

	return { followersCount, followers };
};
