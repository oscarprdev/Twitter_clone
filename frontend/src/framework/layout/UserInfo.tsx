import PageWrapper from '../components/PageWrapper';
import ProfileContainer from '../components/Profile/ProfileContainer';
import { useUserById } from '../hooks/useUserById';

interface UserInfoProps {
	id: string;
}

const UserInfo = ({ id }: UserInfoProps) => {
	const { user } = useUserById(id);

	return (
		<PageWrapper>
			{user ? (
				<>
					<ProfileContainer
						user={user}
						isInfo
					/>
				</>
			) : (
				<p>User not found</p>
			)}
		</PageWrapper>
	);
};

export default UserInfo;
