import { User } from '../../../features/shared/domain/types/user';
import { useAddFollow } from '../../hooks/useAddFollow';
import UserImage from '../UserImage';
import AddFollowBtn from './AddFollowBtn';

interface UnfollowerProps {
	unfollower: User;
}

const Unfollower = ({ unfollower }: UnfollowerProps) => {
	const { handleAddFollowClick, loading } = useAddFollow(unfollower.id);

	return (
		<li className={`${unfollower.isNew && 'animate-appearing'} flex justify-between w-full p-3 hover:bg-zinc-800 duration-300`}>
			<div className='flex gap-2'>
				<UserImage userImage={unfollower.profileImgUrl} />
				<div className='flex flex-col'>
					<p className='font-extrabold'>{unfollower.name}</p>
					<p className='text-zinc-400'>@{unfollower.username}</p>
				</div>
			</div>
			<AddFollowBtn
				handleAddFollowClick={handleAddFollowClick}
				loading={loading}
			/>
		</li>
	);
};

export default Unfollower;
