import { removeFollowUsecase } from '../../features/followers/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useRemoveFollow = (unfollowToId: string) => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	const handleRemoveFollowClick = async () => {
		await removeFollowUsecase.removeFollow({
			userId: userLogged.id,
			unfollowTo: unfollowToId,
		});
	};

	return { handleRemoveFollowClick };
};
