import { User } from '../../types/user';
import UserImage from '../UserImage';

interface UnfollowerProps {
	unfollower: User;
}
const Unfollower = ({ unfollower }: UnfollowerProps) => {
	return (
		<article className='flex justify-between w-full p-3 hover:bg-zinc-800 duration-300'>
			<div className='flex gap-2'>
				<UserImage userImage={unfollower.profileImgUrl} />
				<div className='flex flex-col'>
					<p className='font-extrabold'>{unfollower.name}</p>
					<p className='text-zinc-400'>@{unfollower.username}</p>
				</div>
			</div>

			<button className='px-5 font-bold bg-white text-black rounded-full'>
				<p>Follow</p>
			</button>
		</article>
	);
};

export default Unfollower;
