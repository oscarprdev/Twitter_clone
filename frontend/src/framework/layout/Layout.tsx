import Nav from '../components/Nav/Nav';
import Aside from '../components/Aside/Aside';
import { Route } from 'wouter';
import Notifications from './Notifications';
import Profile from './Profile';
import Home from './Home';
import UserInfo from './UserInfo';

const Layout = () => {
	return (
		<main className='flex h-screen w-screen justify-center items-start'>
			<Nav />
			<Route
				path='/home'
				component={Home}
			/>
			<Route
				path='/notifications'
				component={Notifications}
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
