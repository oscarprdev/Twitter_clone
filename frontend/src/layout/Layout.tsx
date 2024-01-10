import Nav from '../components/Nav/Nav';
import Aside from '../components/Aside/Aside';
import { Route } from 'wouter';
import Notifications from './Notifications';
import Profile from './Profile';
import Home from './Home';

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
			<Aside />
		</main>
	);
};

export default Layout;
