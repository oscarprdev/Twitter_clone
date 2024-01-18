import { useEffect, useState } from 'react';
import { useStoreSelector } from '../store/hooks/useSelector';
import { getUnfollowersUsecase } from '../../features/followers/graph';

export const useUnfollowers = () => {
	const [loading, setLoading] = useState(false);
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const unfollowers = useStoreSelector((state) => state.users.unfollowers);

	useEffect(() => {
		const getUnfollowers = async () => {
			setLoading(true);
			await getUnfollowersUsecase.getUnfollowers({ userId: userLogged.id });
			setLoading(false);
		};

		if (userLogged && userLogged.id !== '') {
			getUnfollowers();
		}
	}, [userLogged]);

	return {
		unfollowers,
		loading,
	};
};
