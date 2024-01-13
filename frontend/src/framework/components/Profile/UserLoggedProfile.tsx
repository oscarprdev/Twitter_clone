import { useStoreSelector } from '../../store/hooks/useSelector';
import ProfileContainer from './ProfileContainer';

const UserLoggedProfile = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	return (
		<>
			<ProfileContainer user={userLogged} />
		</>
	);
};

export default UserLoggedProfile;
