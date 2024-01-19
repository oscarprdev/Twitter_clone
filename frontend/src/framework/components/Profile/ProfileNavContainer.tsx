import { useState } from 'react';
import ProfileNav from './ProfileNav';
import ProfileFollowers from './ProfileFollowers';
import ProfilePosts from './ProfilePosts';
import { User } from '../../../features/shared/domain/types/user';
import { TAB_ACTIVE, tabs } from './utils';

interface ProfileNavContainerProps {
	id: string;
	followers: User[];
	followings: User[];
	isInfo?: boolean;
}

const ProfileNavContainer = ({ id, followers, followings, isInfo }: ProfileNavContainerProps) => {
	const [navState, setNavState] = useState<TAB_ACTIVE>(tabs.POSTS);

	const handleTabActive = (navItem: TAB_ACTIVE) => {
		setNavState(navItem);
	};

	return (
		<>
			<ProfileNav
				handleTabActive={handleTabActive}
				navState={navState}
			/>
			{navState === tabs.POSTS && <ProfilePosts id={id} />}
			{navState === tabs.FOLLOWERS && (
				<ProfileFollowers
					kind={'followers'}
					users={followers}
					followings={followings}
					isInfo={isInfo}
				/>
			)}
			{navState === tabs.FOLLOWINGS && (
				<ProfileFollowers
					kind={'following'}
					users={followings}
					followings={followings}
					isInfo={isInfo}
				/>
			)}
		</>
	);
};

export default ProfileNavContainer;
