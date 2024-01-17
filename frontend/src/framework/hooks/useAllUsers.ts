import { useEffect, useState } from 'react';
import { getAllUsersUsecase } from '../../features/users/graph';
import { User } from '../../features/shared/domain/types/user';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useAllUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const unfollowers = useStoreSelector((state) => state.users.unfollowers);

	useEffect(() => {
		const getAllUsers = async () => {
			const allUsersResponse = await getAllUsersUsecase.getAllUsers();

			if (allUsersResponse.state === 'success') {
				setUsers(allUsersResponse.users);
			}
		};

		getAllUsers();
	}, [unfollowers]);

	return {
		users,
	};
};
