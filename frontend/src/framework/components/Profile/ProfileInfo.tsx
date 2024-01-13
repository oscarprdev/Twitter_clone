import CalendarIcon from '../icons/CalendarIcon';
import { strDateToTime } from '../../utils/strDateToTime';
import FollowersCount from './FollowersCount';

interface ProfileInfoProps {
	profileImgUrl: string;
	name: string;
	surname: string;
	username: string;
	createdAt: string;
	followersCount: number;
	followingCount: number;
}

const ProfileInfo = ({ profileImgUrl, name, surname, username, createdAt, followersCount, followingCount }: ProfileInfoProps) => {
	return (
		<>
			<div
				aria-roledescription='profile-background'
				className='relative w-full h-[25vh] bg-zinc-800'>
				<figure className='w-40 h-40 absolute bottom-[-5rem] left-5 rounded-full border-[0.3rem] border-black overflow-hidden'>
					<img
						src={profileImgUrl}
						alt='Profile user image'
						className='w-full h-full object-cover'
					/>
				</figure>
			</div>
			<section className='flex flex-col gap-1 px-5 pt-24'>
				<p className='capitalize text-xl font-white font-extrabold'>{`${name} ${surname}`}</p>
				<p className='text-zinc-500 capitalize'>@{username}</p>
				<div
					aria-roledescription='user-joined-date-info'
					className='flex items-center gap-1'>
					<span className='w-5 h-5 text-zinc-500'>
						<CalendarIcon />
					</span>
					<p className='text-zinc-500'>Joined {strDateToTime(createdAt)} ago</p>
				</div>
			</section>
			<FollowersCount
				followersCount={followersCount}
				followingCount={followingCount}
			/>
		</>
	);
};

export default ProfileInfo;
