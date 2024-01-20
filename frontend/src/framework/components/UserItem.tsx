import { User } from '../../features/shared/domain/types/user';
import UserImage from './UserImage';

interface UserItemProps {
	user: User;
}

const UserItem = ({ user }: UserItemProps) => {
	return (
		<article className='flex gap-2'>
			<UserImage userImage={user.profileImgUrl} />
			<div className='flex flex-col'>
				<p className='font-extrabold'>
					{user.name} {user.surname}
				</p>
				<p className='text-zinc-400'>@{user.username}</p>
			</div>
		</article>
	);
};

export default UserItem;
