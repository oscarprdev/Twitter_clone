import Nav from '../components/Nav/Nav';
import Aside from '../components/Aside/Aside';
import { Route } from 'wouter';
import Profile from './Profile';
import Home from './Home';
import UserInfo from './UserInfo';
import Settings from './Settings';
import { useUserLogged } from '../hooks/useUserLogged';
import { useStoreSelector } from '../store/hooks/useSelector';
import ToastError from '../components/ToastError';

const Layout = () => {
	useUserLogged();
	const { errorMessage } = useStoreSelector((state) => state.errors);

	return (
		<main className='flex h-screen w-screen justify-center items-start'>
			<Nav />
			<Route
				path='/'
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
			{errorMessage && <ToastError errorMessage={errorMessage} />}
		</main>
	);
};

export default Layout;
