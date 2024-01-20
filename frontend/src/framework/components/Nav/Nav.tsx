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
import UserItem from '../UserItem';
import { useStoreSelector } from '../../store/hooks/useSelector';

const Nav = () => {
	const { openModal } = useModal();

	const handlePostButtonClick = () => {
		openModal(<AddPostModal />);
	};

	const userLogged = useStoreSelector((state) => state.users.userLogged);

	return (
		<nav className='flex flex-col items-start w-[16%] h-full py-3 pl-25'>
			<span className='block w-7'>
				<BrandIcon color='white' />
			</span>
			<ul className='mt-5 ml-[-16px] flex flex-col gap-3 w-full'>
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
					className='font-bold mt-5 text-xl px-4 py-3 rounded-full bg-[var(--contrast)] hover:bg-[var(--contrast-dark)] duration-300'>
					Post
				</button>
			</ul>
			<div className='mt-auto mb-5'>
				<UserItem user={userLogged} />
			</div>
		</nav>
	);
};

export default Nav;
