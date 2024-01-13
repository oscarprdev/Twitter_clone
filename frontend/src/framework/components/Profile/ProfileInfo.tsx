import { useState } from 'react';
import { User } from '../../../features/shared/types/user';
import { usePostsByUser } from '../../hooks/usePostsByUser';
import { strDateToTime } from '../../utils/strDateToTime';
import CalendarIcon from '../icons/CalendarIcon';
import FollowersCount from './FollowersCount';
import ProfileNav from './ProfileNav';
import { TAB_ACTIVE, tabs } from './utils';
import ProfilePosts from './ProfilePosts';
import ProfileFollowers from './ProfileFollowers';
import { useFollowings } from '../../hooks/useFollowings';
import { useFollowers } from '../../hooks/useFollowers';

interface ProfileInfoProps {
	user: User;
}

const ProfileInfo = ({ user }: ProfileInfoProps) => {
	const { followers, followersCount } = useFollowers(user.id);
	const { followings, followingCount } = useFollowings(user.id);

	const { postsCount } = usePostsByUser(user.id);
	const [navState, setNavState] = useState<TAB_ACTIVE>(tabs.POSTS);

	const handleTabActive = (navItem: TAB_ACTIVE) => {
		setNavState(navItem);
	};

	return (
		<section className='w-full h-fit overflow-scroll'>
			<header className='pt-5 pl-5 pb-2 flex flex-col justify-start w-full'>
				<p className='capitalize text-xl font-white font-extrabold'>{`${user.name} ${user.surname}`}</p>
				<p className='text-zinc-500'>{postsCount} posts</p>
			</header>
			<div className='relative w-full h-[25vh] bg-zinc-800'>
				<figure className='w-40 h-40 absolute bottom-[-5rem] left-5 rounded-full border-[0.3rem] border-black overflow-hidden'>
					<img
						src={user.profileImgUrl}
						alt='Profile user image'
						className='w-full h-full object-cover'
					/>
				</figure>
			</div>
			<div className='flex flex-col gap-1 px-5 pt-24'>
				<p className='capitalize text-xl font-white font-extrabold'>{`${user.name} ${user.surname}`}</p>
				<p className='text-zinc-500 capitalize'>@{user.username}</p>
				<div className='flex items-center gap-1'>
					<span className='w-5 h-5 text-zinc-500'>
						<CalendarIcon />
					</span>
					<p className='text-zinc-500'>Joined {strDateToTime(user.createdAt)} ago</p>
				</div>
			</div>
			<FollowersCount
				followersCount={followersCount}
				followingCount={followingCount}
			/>
			<ProfileNav
				handleTabActive={handleTabActive}
				navState={navState}
			/>
			{navState === tabs.POSTS && <ProfilePosts id={user.id} />}
			{navState === tabs.FOLLOWERS && (
				<ProfileFollowers
					kind={'followers'}
					users={followers}
				/>
			)}
			{navState === tabs.FOLLOWINGS && (
				<ProfileFollowers
					kind={'following'}
					users={followings}
				/>
			)}
		</section>
	);
};

export default ProfileInfo;
