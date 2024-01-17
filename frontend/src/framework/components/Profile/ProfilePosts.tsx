import { usePostsByUser } from '../../hooks/usePostsByUser';
import Post from '../Home/Post';

interface ProfilePostsProps {
	id: string;
}

const ProfilePosts = ({ id }: ProfilePostsProps) => {
	const { posts } = usePostsByUser(id);

	return (
		<ul className='w-full h-fit flex flex-col items-center mt-[-1.3rem]'>
			{posts.length > 0 ? (
				posts.map((post) => (
					<Post
						key={post.id}
						post={post}
					/>
				))
			) : (
				<p className='mt-10 font-light text-zinc-200'>0 posts</p>
			)}
		</ul>
	);
};

export default ProfilePosts;
