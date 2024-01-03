import NavItem from './NavItem';
import { BrandIcon } from './icons/BrandIcon';
import { HomeActiveIcon } from './icons/HomeActiveIcon';
import { HomeIcon } from './icons/HomeIcon';
import { NotificationsActiveIcon } from './icons/NotificationsActiveIcon';
import { NotificationsIcon } from './icons/NotificationsIcon';
import { ProfileActiveIcon } from './icons/ProfileActiveIcon';
import { ProfileIcon } from './icons/ProfileIcon';

const Nav = () => {
	return (
		<nav className='flex flex-col p-5 w-[25vw] items-start py-3 pl-32'>
			<span className='block w-12'>
				<BrandIcon color='white' />
			</span>
			<ul className='mt-10 ml-[-16px] flex flex-col gap-5 w-full'>
				<NavItem
					text='home'
					defaultIcon={<HomeIcon />}
					activeIcon={<HomeActiveIcon />}
				/>
				<NavItem
					text='notifications'
					defaultIcon={<NotificationsIcon />}
					activeIcon={<NotificationsActiveIcon />}
				/>
				<NavItem
					text='profile'
					defaultIcon={<ProfileIcon />}
					activeIcon={<ProfileActiveIcon />}
				/>
			</ul>
		</nav>
	);
};

export default Nav;
