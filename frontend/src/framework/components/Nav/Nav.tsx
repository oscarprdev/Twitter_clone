import NavItem from './NavItem';
import { BrandIcon } from '../icons/BrandIcon';
import { HomeActiveIcon } from '../icons/HomeActiveIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { ProfileActiveIcon } from '../icons/ProfileActiveIcon';
import { ProfileIcon } from '../icons/ProfileIcon';
import { useModal } from '../../hooks/useModal';
import AddPostModal from '../Modals/AddPostModal';
import SettingsIcon from '../icons/SettingsIcon';
import SettingsFilledIcon from '../icons/SettingsFilledIcon';

const Nav = () => {
	const { openModal } = useModal();

	const handlePostButtonClick = () => {
		openModal(<AddPostModal />);
	};

	return (
		<nav className='flex flex-col items-start w-[15%] py-3 pl-25'>
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
					text='profile'
					defaultIcon={<ProfileIcon />}
					activeIcon={<ProfileActiveIcon />}
				/>
				<NavItem
					text='settings'
					defaultIcon={<SettingsIcon />}
					activeIcon={<SettingsFilledIcon />}
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
