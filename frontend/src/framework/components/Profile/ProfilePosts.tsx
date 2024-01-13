import { usePostsByUser } from '../../hooks/usePostsByUser';
import Post from '../Home/Post';

interface ProfilePostsProps {
	id: string;
}

const ProfilePosts = ({ id }: ProfilePostsProps) => {
	const { postsByUser } = usePostsByUser(id);

	return (
		<section className='w-full h-fit flex flex-col mt-[-1.3rem]'>
			{postsByUser.map((post) => (
				<Post post={post} />
			))}
		</section>
	);
};

export default ProfilePosts;
