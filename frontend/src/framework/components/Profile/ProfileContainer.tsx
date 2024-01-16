import { User } from '../../../features/shared/domain/types/user';
import { useFollowers } from '../../hooks/useFollowers';
import { useFollowings } from '../../hooks/useFollowings';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileNavContainer from './ProfileNavContainer';

interface ProfileContainerProps {
	user: User;
	isInfo?: boolean;
}

const ProfileContainer = ({ user, isInfo }: ProfileContainerProps) => {
	const { followers, followersCount } = useFollowers(user.id);
	const { followings, followingCount } = useFollowings(user.id);

	return (
		<section className='w-full h-full overflow-y-scroll'>
			<ProfileHeader
				name={user.name}
				surname={user.surname}
				id={user.id}
				isInfo={isInfo}
			/>
			<ProfileInfo
				profileImgUrl={user.profileImgUrl}
				name={user.name}
				surname={user.surname}
				username={user.username}
				createdAt={user.createdAt}
				followersCount={followersCount}
				followingCount={followingCount}
				isInfo={isInfo}
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
