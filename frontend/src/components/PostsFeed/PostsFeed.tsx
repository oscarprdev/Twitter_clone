import AddPost from './AddPost';
import usePosts from '../../hooks/usePosts';
import Post from './Post';
import LoaderIcon from '../icons/LoaderIcon';

const PostFeed = () => {
	const { posts, isLoading } = usePosts();

	return (
		<>
			<AddPost />
			{isLoading ? (
				<span className='w-10 mt-20 text-[var(--contrast)] animate-spin'>
					<LoaderIcon />
				</span>
			) : (
				posts.map((post) => (
					<Post
						key={post.id}
						post={post}
					/>
				))
			)}
		</>
	);
};

export default PostFeed;
