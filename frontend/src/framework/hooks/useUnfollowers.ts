import { useEffect } from 'react';
import { useStoreSelector } from '../store/hooks/useSelector';
import { getUnfollowersUsecase } from '../../features/followers/graph';

export const useUnfollowers = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const unfollowers = useStoreSelector((state) => state.users.unfollowers);

	useEffect(() => {
		const getUnfollowers = async () => {
			await getUnfollowersUsecase.getUnfollowers({ userId: userLogged.id });
		};

		if (userLogged && userLogged.id !== '') {
			getUnfollowers();
		}
	}, [userLogged.id]);

	return {
		unfollowers,
	};
};
