import { removeFollowUsecase } from '../../features/followers/graph';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { useStoreSelector } from '../store/hooks/useSelector';
import { removeFollow } from '../store/slices/users-slice';

export const useRemoveFollow = (unfollowToId: string) => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const dispatch = useStoreDispatch();

	const handleRemoveFollowClick = async () => {
		const removeFollowResponse = await removeFollowUsecase.removeFollow({
			userId: userLogged.id,
			unfollowTo: unfollowToId,
		});

		if (removeFollowResponse.state === 'success') {
			dispatch(removeFollow({ follower: removeFollowResponse.unfollowToUser }));
		}
	};

	return { handleRemoveFollowClick };
};
