import { User } from '../../features/shared/types/user';
import { strDateToTime } from '../../utils/strDateToTime';
import CalendarIcon from '../icons/CalendarIcon';
import FollowersCount from './FollowersCount';

interface ProfileInfoProps {
	user: User;
}

const ProfileInfo = ({ user }: ProfileInfoProps) => {
	return (
		<section className='w-full'>
			<header className='p-5 flex justify-start w-full'>
				<p className='capitalize text-xl font-white font-extrabold'>{`${user.name} ${user.surname}`}</p>
			</header>
			<div className='relative w-full h-[30vh] bg-zinc-800'>
				<figure className='w-40 h-40 absolute bottom-[-4rem] left-5 rounded-full border-[0.3rem] border-black overflow-hidden'>
					<img
						src={user.profileImgUrl}
						alt='Profile user image'
						className='w-full h-full object-cover'
					/>
				</figure>
			</div>
			<div className='flex flex-col gap-1 px-5 pt-20'>
				<p className='capitalize text-xl font-white font-extrabold'>{`${user.name} ${user.surname}`}</p>
				<p className='text-zinc-500 capitalize'>@{user.username}</p>
				<div className='flex items-center gap-1'>
					<span className='w-5 h-5 text-zinc-500'>
						<CalendarIcon />
					</span>
					<p className='text-zinc-500'>Joined {strDateToTime(user.createdAt)} ago</p>
				</div>
			</div>
			<FollowersCount id={user.id} />
		</section>
	);
};

export default ProfileInfo;
