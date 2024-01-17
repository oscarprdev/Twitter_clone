import CalendarIcon from '../icons/CalendarIcon';
import { strDateToTime } from '../../utils/strDateToTime';
import FollowersCount from './FollowersCount';
import { useModal } from '../../hooks/useModal';
import UpdateUserModal from '../Modals/UpdateUserModal';

interface ProfileInfoProps {
	profileImgUrl: string;
	name: string;
	surname: string;
	username: string;
	createdAt: string;
	followersCount: number;
	followingCount: number;
	isInfo?: boolean;
}

const ProfileInfo = ({ profileImgUrl, name, surname, username, createdAt, followersCount, followingCount, isInfo }: ProfileInfoProps) => {
	const modal = useModal();

	const handleConfigureProfileClick = () => {
		modal.openModal(<UpdateUserModal />);
	};

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
				{!isInfo && (
					<button
						onClick={handleConfigureProfileClick}
						className='absolute right-2 bottom-[-3.5rem] px-8 py-2 border font-bold border-zinc-600 rounded-full hover:bg-zinc-900 duration-300'>
						Configure profile
					</button>
				)}
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
