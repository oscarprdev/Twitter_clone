import UserImage from '../UserImage';
import { User } from '../../../features/shared/types/user';

interface ProfileFollowersProps {
	users: User[];
	kind: 'followers' | 'following';
}

const ProfileFollowers = ({ users, kind }: ProfileFollowersProps) => {
	return (
		<section className='w-full h-fit flex flex-col items-center mt-[-1.3rem]'>
			{users.length > 0 ? (
				users.map((user) => (
					<>
						<div className='flex gap-2 w-full p-8 hover:bg-zinc-900'>
							<UserImage userImage={user.profileImgUrl} />
							<div className='flex flex-col'>
								<p className='font-extrabold text-md'>
									{user.name} {user.surname}
								</p>
								<p className='text-zinc-400 text-md'>@{user.username}</p>
							</div>
						</div>
					</>
				))
			) : (
				<p className='mt-10 font-light text-zinc-200'>0 {kind}</p>
			)}
		</section>
	);
};

export default ProfileFollowers;
