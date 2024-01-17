import { useEffect } from 'react';
import { getUserAuthUsecase, loginUsecase } from '../../features/users/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useUserLogged = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	useEffect(() => {
		const jwt = localStorage.getItem('jwt')?.toString();

		const getDefaultUserLogged = async () => {
			await loginUsecase.logIn({ email: 'oscarperez@email.com', password: '1234' });
		};

		const getUserByJWT = async (jwt: string) => {
			await getUserAuthUsecase.getUserAuth({ jwt });
		};

		if (jwt) {
			getUserByJWT(jwt);
		} else {
			getDefaultUserLogged();
		}
	}, []);

	return { userLogged };
};
