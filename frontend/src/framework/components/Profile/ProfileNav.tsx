import { TAB_ACTIVE, tabs } from './utils';

interface ProfileNavProps {
	navState: TAB_ACTIVE;
	handleTabActive(navItem: TAB_ACTIVE): void;
}

const ProfileNav = ({ navState, handleTabActive }: ProfileNavProps) => {
	return (
		<nav className='w-full p-5'>
			<ul className='w-full flex items-center justify-between border-b border-zinc-700'>
				<li
					className={`${
						navState === tabs.POSTS ? 'font-bold border-[var(--contrast)]' : 'font-light border-transparent'
					} py-5 px-10 border-b-4 hover:bg-zinc-900 cursor-pointer box-border`}
					onClick={() => handleTabActive(tabs.POSTS)}>
					Posts
				</li>
				<li
					className={`${
						navState === tabs.FOLLOWERS ? 'font-bold border-[var(--contrast)]' : 'font-light border-transparent'
					} py-5 px-10 border-b-4 hover:bg-zinc-900 cursor-pointer box-border`}
					onClick={() => handleTabActive(tabs.FOLLOWERS)}>
					Followers
				</li>
				<li
					className={`${
						navState === tabs.FOLLOWINGS ? 'font-bold border-[var(--contrast)]' : 'font-light border-transparent'
					} py-5 px-10 border-b-4 hover:bg-zinc-900 cursor-pointer box-border`}
					onClick={() => handleTabActive(tabs.FOLLOWINGS)}>
					Following
				</li>
			</ul>
		</nav>
	);
};

export default ProfileNav;
