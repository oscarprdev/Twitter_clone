import { useEffect } from 'react';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { useStoreSelector } from '../store/hooks/useSelector';
import { getUnfollowersUsecase } from '../features/followers/graph';
import { UPDATE_UNFOLLOWERS_TYPES } from '../store/reducers/users/update-unfollowers/update-unfollowers.types';
import { updateUnfollowers } from '../store/slices/users-slice';

export const useUnfollowers = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const unfollowers = useStoreSelector((state) => state.users.unfollowers);

	const dispatch = useStoreDispatch();

	useEffect(() => {
		const getUnfollowers = async () => {
			const unfollowersResponse = await getUnfollowersUsecase.getUnfollowers({ userId: userLogged.id });

			if (unfollowersResponse.state === 'success') {
				dispatch(
					updateUnfollowers({
						type: UPDATE_UNFOLLOWERS_TYPES.UPDATE_UNFOLLOWERS,
						unfollowers: unfollowersResponse.unfollowers,
					})
				);
			}
		};

		getUnfollowers();
	});

	return {
		unfollowers,
	};
};
