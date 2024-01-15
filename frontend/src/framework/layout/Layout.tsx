import Nav from '../components/Nav/Nav';
import Aside from '../components/Aside/Aside';
import { Route } from 'wouter';
import Profile from './Profile';
import Home from './Home';
import UserInfo from './UserInfo';
import Settings from './Settings';
import { useEffect } from 'react';
import { useStoreDispatch } from '../store/hooks/useDispatch';
import { getUserUsecase } from '../../features/users/graph';
import { USER_ID } from '../../features/shared/domain/constants/constants';
import { updateUserLogged } from '../store/slices/users-slice';

const Layout = () => {
	const dispatch = useStoreDispatch();

	useEffect(() => {
		const getDefaultUserLogged = async () => {
			const userResponse = await getUserUsecase.getUser({ userId: USER_ID });

			if (userResponse.state === 'success') {
				dispatch(updateUserLogged({ user: userResponse.user }));
			}
		};

		getDefaultUserLogged();
	}, []);

	return (
		<main className='flex h-screen w-screen justify-center items-start'>
			<Nav />
			<Route
				path='/home'
				component={Home}
			/>
			<Route
				path='/settings'
				component={Settings}
			/>
			<Route
				path='/profile'
				component={Profile}
			/>
			<Route path='/user/:id'>{(params) => <UserInfo id={params.id} />}</Route>
			<Aside />
		</main>
	);
};

export default Layout;
