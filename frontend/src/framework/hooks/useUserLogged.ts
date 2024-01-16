import { useEffect } from 'react';
import { getUserAuthUsecase, loginUsecase } from '../../features/users/graph';

export const useUserLogged = (email: string) => {
	useEffect(() => {
		const jwt = localStorage.getItem('jwt')?.toString();

		const getDefaultUserLogged = async () => {
			await loginUsecase.logIn({ email, password: '1234' });
		};

		const getUserByJWT = async (jwt: string) => {
			await getUserAuthUsecase.getUserAuth({ jwt });
		};

		if (jwt) {
			getUserByJWT(jwt);
		} else {
			getDefaultUserLogged();
		}
	}, [email]);
};
