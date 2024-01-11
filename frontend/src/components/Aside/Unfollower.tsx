import { addFollowUsecase } from '../../features/followers/graph';
import { User } from '../../features/shared/types/user';
import { useStoreDispatch } from '../../store/hooks/useDispatch';
import { useStoreSelector } from '../../store/hooks/useSelector';
import { ADD_FOLLOWERS_TYPES } from '../../store/reducers/users/add-follow/add-follow.types';
import { addFollow } from '../../store/slices/users-slice';
import UserImage from '../UserImage';

interface UnfollowerProps {
	unfollower: User;
}
const Unfollower = ({ unfollower }: UnfollowerProps) => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const dispatch = useStoreDispatch();

	const handleAddFollowClick = async () => {
		const addFollowResponse = await addFollowUsecase.addFollow({ userId: userLogged.id, followTo: unfollower.id });

		if (addFollowResponse.state === 'success') {
			dispatch(addFollow({ type: ADD_FOLLOWERS_TYPES.ADD_FOLLOWERS, follower: addFollowResponse.followTo }));
		}
	};

	return (
		<article className='flex justify-between w-full p-3 hover:bg-zinc-800 duration-300'>
			<div className='flex gap-2'>
				<UserImage userImage={unfollower.profileImgUrl} />
				<div className='flex flex-col'>
					<p className='font-extrabold'>{unfollower.name}</p>
					<p className='text-zinc-400'>@{unfollower.username}</p>
				</div>
			</div>
			<button
				onClick={handleAddFollowClick}
				className='px-5 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'>
				<p>Follow</p>
			</button>
		</article>
	);
};

export default Unfollower;
