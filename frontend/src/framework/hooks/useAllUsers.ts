import { useEffect, useState } from 'react';
import { getAllUsersUsecase } from '../../features/users/graph';
import { User } from '../../features/shared/domain/types/user';

export const useAllUsers = () => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const getAllUsers = async () => {
			setLoading(true);
			const allUsersResponse = await getAllUsersUsecase.getAllUsers();

			if (allUsersResponse.state === 'success') {
				setUsers(allUsersResponse.users);
				setLoading(false);
			}
		};

		getAllUsers();
	}, []);

	return {
		users,
		loading,
	};
};
