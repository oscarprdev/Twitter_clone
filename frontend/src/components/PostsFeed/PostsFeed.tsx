import AddPost from './AddPost';
import usePosts from '../../hooks/usePosts';
import Post from './Post';
import LoaderIcon from '../icons/LoaderIcon';

const PostFeed = () => {
	const { posts, isLoading } = usePosts();

	return (
		<section className='flex flex-col items-center w-[800px] h-full border border-y-0 border-x-zinc-500'>
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
		</section>
	);
};

export default PostFeed;
