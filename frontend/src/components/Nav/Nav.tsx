import NavItem from './NavItem';
import { BrandIcon } from '../icons/BrandIcon';
import { HomeActiveIcon } from '../icons/HomeActiveIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { NotificationsActiveIcon } from '../icons/NotificationsActiveIcon';
import { NotificationsIcon } from '../icons/NotificationsIcon';
import { ProfileActiveIcon } from '../icons/ProfileActiveIcon';
import { ProfileIcon } from '../icons/ProfileIcon';
import { useModal } from '../../hooks/useModal';
import AddPostModal from '../Modals/AddPostModal';

const Nav = () => {
	const { openModal } = useModal();

	const handlePostButtonClick = () => {
		openModal(<AddPostModal />);
	};

	return (
		<nav className='flex flex-col p-5 w-[25vw] items-start py-3 pl-32'>
			<span className='block w-12'>
				<BrandIcon color='white' />
			</span>
			<ul className='mt-10 ml-[-16px] flex flex-col gap-3 w-full'>
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
				<button
					onClick={handlePostButtonClick}
					className='font-bold mt-5 text-xl px-5 py-4 rounded-full bg-[var(--contrast)] hover:bg-[var(--contrast-dark)] duration-300'>
					Post
				</button>
			</ul>
		</nav>
	);
};

export default Nav;
