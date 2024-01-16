import { useEffect, useState } from 'react';
import { User } from '../../features/shared/domain/types/user';
import { getUserUsecase } from '../../features/users/graph';

export const useUserById = (id: string) => {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const getUserById = async () => {
			const userResponse = await getUserUsecase.getUser({ userId: id });

			if (userResponse.state === 'success') {
				setUser(userResponse.user);
			}
		};

		getUserById();
	}, [id]);

	return { user };
};
