import { usePostsByUser } from '../../hooks/usePostsByUser';
import Post from '../Home/Post';

interface ProfilePostsProps {
	id: string;
}

const ProfilePosts = ({ id }: ProfilePostsProps) => {
	const { postsByUser } = usePostsByUser(id);

	return (
		<ul className='w-full h-fit flex flex-col mt-[-1.3rem]'>
			{postsByUser.map((post) => (
				<Post
					key={post.id}
					post={post}
				/>
			))}
		</ul>
	);
};

export default ProfilePosts;
