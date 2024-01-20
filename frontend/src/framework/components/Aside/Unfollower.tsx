import { User } from '../../../features/shared/domain/types/user';
import { useAddFollow } from '../../hooks/useAddFollow';
import UserItem from '../UserItem';
import AddFollowBtn from './AddFollowBtn';

interface UnfollowerProps {
	unfollower: User;
}

const Unfollower = ({ unfollower }: UnfollowerProps) => {
	const { handleAddFollowClick, loading } = useAddFollow(unfollower.id);

	return (
		<li className={`${unfollower.isNew && 'animate-appearing'} flex justify-between w-full p-3 hover:bg-zinc-800 duration-300`}>
			<UserItem user={unfollower} />
			<AddFollowBtn
				handleAddFollowClick={handleAddFollowClick}
				loading={loading}
			/>
		</li>
	);
};

export default Unfollower;
