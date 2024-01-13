import { useEffect, useState } from 'react';
import { getFollowingUsecase } from '../../features/followers/graph';
import { User } from '../../features/shared/domain/types/user';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useFollowings = (id: string) => {
	const [followingCount, setFollowingCount] = useState(0);
	const [followings, setFollowings] = useState<User[]>([]);

	const followers = useStoreSelector((state) => state.users.followers);
	const unfollowers = useStoreSelector((state) => state.users.unfollowers);

	useEffect(() => {
		const getFollowing = async () => {
			const followingResponse = await getFollowingUsecase.getFollowing({ userId: id });

			if (followingResponse.state === 'success') {
				setFollowingCount(followingResponse.count);
				setFollowings(followingResponse.following);
			}
		};

		getFollowing();
	}, [followers, unfollowers, id]);

	return {
		followingCount,
		followings,
	};
};
