import UserImage from '../UserImage';
import { User } from '../../../features/shared/domain/types/user';
import RemoveFollowBtn from './RemoveFollowBtn';
import AddFollowBtn from '../Aside/AddFollowBtn';
import { useRemoveFollow } from '../../hooks/useRemoveFollow';
import { useAddFollow } from '../../hooks/useAddFollow';

interface ProfileFollowerProps {
	profileImgUrl: string;
	name: string;
	surname: string;
	username: string;
	followings: User[];
	userId: string;
	isFollower?: boolean;
	isInfo?: boolean;
}

const ProfileFollower = ({ profileImgUrl, name, surname, username, followings, userId, isFollower, isInfo }: ProfileFollowerProps) => {
	const { handleRemoveFollowClick, loading, done } = useRemoveFollow(userId);
	const { handleAddFollowClick, loading: loadingFollow } = useAddFollow(userId);

	return (
		<li
			role='profile-user-item'
			className={`${done && !isFollower ? 'animate-dissapear' : 'animate-appearing'} flex gap-5 w-full p-8 hover:bg-zinc-900`}>
			<UserImage userImage={profileImgUrl} />
			<div
				aria-roledescription='follower-personal-info'
				className='flex flex-col'>
				<p className='font-extrabold text-md'>
					{name} {surname}
				</p>
				<p className='text-zinc-400 text-md'>@{username}</p>
			</div>
			{!isInfo &&
				(followings?.some((following) => following.id === userId) ? (
					<RemoveFollowBtn
						handleRemoveFollowClick={handleRemoveFollowClick}
						loading={loading}
					/>
				) : (
					<AddFollowBtn
						handleAddFollowClick={handleAddFollowClick}
						loading={loadingFollow}
					/>
				))}
		</li>
	);
};

export default ProfileFollower;
