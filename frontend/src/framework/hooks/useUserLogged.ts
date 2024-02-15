import { useEffect } from 'react';
import { getUserAuthUsecase, loginUsecase } from '../../features/users/graph';
import { useStoreSelector } from '../store/hooks/useSelector';
import { DEFAULT_EMAIL, DEFAULT_PASSWORD } from '../../features/shared/domain/constants/constants';

export const useUserLogged = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	useEffect(() => {
		const jwt = localStorage.getItem('jwt')?.toString();

		const getDefaultUserLogged = async () => {
			await loginUsecase.logIn({ email: DEFAULT_EMAIL, password: DEFAULT_PASSWORD });
		};

		const getUserByJWT = async (jwt: string) => {
			await getUserAuthUsecase.getUserAuth({ jwt });
		};

		if (userLogged.id && userLogged.id === '' && jwt) {
			getUserByJWT(jwt);
		} else {
			getDefaultUserLogged();
		}
	}, [userLogged.id]);

	return { userLogged };
};
