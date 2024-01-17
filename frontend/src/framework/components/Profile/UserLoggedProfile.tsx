import { useUserLogged } from '../../hooks/useUserLogged';
import ProfileContainer from './ProfileContainer';

const UserLoggedProfile = () => {
	const { userLogged } = useUserLogged();

	return <>{userLogged.id.length > 0 && <ProfileContainer user={userLogged} />}</>;
};

export default UserLoggedProfile;
