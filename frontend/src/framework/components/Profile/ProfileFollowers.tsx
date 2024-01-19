import { User } from '../../../features/shared/domain/types/user';
import ProfileFollower from './ProfileFollower';

interface ProfileFollowersProps {
	users: User[];
	followings: User[];
	kind: 'followers' | 'following';
	isInfo?: boolean;
}

const ProfileFollowers = ({ users, kind, followings, isInfo }: ProfileFollowersProps) => {
	return (
		<ul className='w-full h-fit flex flex-col items-center mt-[-1.3rem]'>
			{users.length > 0 ? (
				users.map((user) => (
					<ProfileFollower
						key={user.id}
						name={user.name}
						surname={user.surname}
						username={user.username}
						profileImgUrl={user.profileImgUrl}
						followings={followings}
						userId={user.id}
						isFollower={kind === 'followers'}
						isInfo={isInfo}
					/>
				))
			) : (
				<p className='mt-10 font-light text-zinc-200'>0 {kind}</p>
			)}
		</ul>
	);
};

export default ProfileFollowers;
