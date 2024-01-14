import { usePostsByUser } from '../../hooks/usePostsByUser';

interface ProfileHeaderProps {
	name: string;
	surname: string;
	id: string;
}

const ProfileHeader = ({ name, surname, id }: ProfileHeaderProps) => {
	const { postsCount } = usePostsByUser(id);

	return (
		<header
			role='heading'
			className='pt-5 pl-5 pb-2 flex flex-col justify-start w-full'>
			<p className='capitalize text-xl font-white font-extrabold'>{`${name} ${surname}`}</p>
			<p className='text-zinc-500'>{postsCount} posts</p>
		</header>
	);
};

export default ProfileHeader;
