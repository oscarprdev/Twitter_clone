import { useEffect } from 'react';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { getUserAuthUsecase, loginUsecase } from '../../features/users/graph';
import { updateUserLogged } from '../store/slices/users-slice';

export const useUserLogged = (email: string) => {
	const dispatch = useStoreDispatch();

	useEffect(() => {
		const jwt = localStorage.getItem('jwt')?.toString();

		const getDefaultUserLogged = async () => {
			const userResponse = await loginUsecase.logIn({ email, password: '1234' });

			if (userResponse.state === 'success') {
				dispatch(updateUserLogged({ user: userResponse.user }));
			}
		};

		const getUserByJWT = async (jwt: string) => {
			const userResponse = await getUserAuthUsecase.getUserAuth({ jwt });

			if (userResponse.state === 'success') {
				dispatch(updateUserLogged({ user: userResponse.user }));
			}
		};

		if (jwt) {
			getUserByJWT(jwt);
		} else {
			getDefaultUserLogged();
		}
	}, [email]);
};
