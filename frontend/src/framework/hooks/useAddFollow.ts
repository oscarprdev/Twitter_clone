import { addFollowUsecase } from '../../features/followers/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useAddFollow = (followToId: string) => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	const handleAddFollowClick = async () => {
		await addFollowUsecase.addFollow({
			userId: userLogged.id,
			followTo: followToId,
		});
	};

	return { handleAddFollowClick };
};
