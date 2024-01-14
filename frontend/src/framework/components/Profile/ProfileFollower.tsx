import { ReactNode } from 'react';
import UserImage from '../UserImage';

interface ProfileFollowerProps {
	profileImgUrl: string;
	name: string;
	surname: string;
	username: string;
	children: ReactNode;
}

const ProfileFollower = ({ profileImgUrl, name, surname, username, children }: ProfileFollowerProps) => {
	return (
		<li
			role='profile-user-item'
			className='flex gap-5 w-full p-8 hover:bg-zinc-900'>
			<UserImage userImage={profileImgUrl} />
			<div
				aria-roledescription='follower-personal-info'
				className='flex flex-col'>
				<p className='font-extrabold text-md'>
					{name} {surname}
				</p>
				<p className='text-zinc-400 text-md'>@{username}</p>
			</div>
			{children}
		</li>
	);
};

export default ProfileFollower;
