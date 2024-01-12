import { useStoreSelector } from '../../store/hooks/useSelector';
import ProfileInfo from './ProfileInfo';

const UserLoggedProfile = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	return (
		<>
			<ProfileInfo user={userLogged} />
		</>
	);
};

export default UserLoggedProfile;
