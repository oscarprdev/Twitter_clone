import { User } from '../../../features/shared/domain/types/user';
import AddFollowBtn from '../Aside/AddFollowBtn';
import ProfileFollower from './ProfileFollower';
import RemoveFollowBtn from './RemoveFollowBtn';

interface ProfileFollowersProps {
	users: User[];
	followings: User[];
	kind: 'followers' | 'following';
}

const ProfileFollowers = ({ users, kind, followings }: ProfileFollowersProps) => {
	return (
		<ul className='w-full h-fit flex flex-col items-center mt-[-1.3rem]'>
			{users.length > 0 ? (
				users.map((user) => (
					<ProfileFollower
						key={user.id}
						name={user.name}
						surname={user.surname}
						username={user.username}
						profileImgUrl={user.profileImgUrl}>
						{followings?.some((following) => following.id === user.id) ? <RemoveFollowBtn id={user.id} /> : <AddFollowBtn id={user.id} />}
					</ProfileFollower>
				))
			) : (
				<p className='mt-10 font-light text-zinc-200'>0 {kind}</p>
			)}
		</ul>
	);
};

export default ProfileFollowers;
