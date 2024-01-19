import { useState } from 'react';
import { removeFollowUsecase } from '../../features/followers/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useRemoveFollow = (unfollowToId: string) => {
	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	const handleRemoveFollowClick = async () => {
		setLoading(true);
		await removeFollowUsecase.removeFollow({
			userId: userLogged.id,
			unfollowTo: unfollowToId,
		});
		setLoading(false);
		setDone(true);
	};

	return { handleRemoveFollowClick, loading, done };
};
