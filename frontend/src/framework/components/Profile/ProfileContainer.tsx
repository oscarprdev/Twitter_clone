import { User } from '../../../features/shared/domain/types/user';
import { useFollowers } from '../../hooks/useFollowers';
import { useFollowings } from '../../hooks/useFollowings';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileNavContainer from './ProfileNavContainer';

interface ProfileContainerProps {
	user: User;
}

const ProfileContainer = ({ user }: ProfileContainerProps) => {
	const { followers, followersCount } = useFollowers(user.id);
	const { followings, followingCount } = useFollowings(user.id);

	return (
		<section className='w-full h-fit overflow-y-scroll'>
			<ProfileHeader
				name={user.name}
				surname={user.surname}
				id={user.id}
			/>
			<ProfileInfo
				profileImgUrl={user.profileImgUrl}
				name={user.name}
				surname={user.surname}
				username={user.username}
				createdAt={user.createdAt}
				followersCount={followersCount}
				followingCount={followingCount}
			/>
			<ProfileNavContainer
				id={user.id}
				followers={followers}
				followings={followings}
			/>
		</section>
	);
};

export default ProfileContainer;
