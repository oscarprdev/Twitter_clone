import { addFollowUsecase } from '../../features/followers/graph';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { useStoreSelector } from '../store/hooks/useSelector';
import { addFollow } from '../store/slices/users-slice';

export const useAddFollow = (followToId: string) => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const dispatch = useStoreDispatch();

	const handleAddFollowClick = async () => {
		const addFollowResponse = await addFollowUsecase.addFollow({
			userId: userLogged.id,
			followTo: followToId,
		});

		if (addFollowResponse.state === 'success') {
			dispatch(addFollow({ follower: addFollowResponse.followTo }));
		}
	};

	return { handleAddFollowClick };
};
