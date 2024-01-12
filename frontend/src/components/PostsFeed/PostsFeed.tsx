import AddPost from './AddPost';
import usePosts from '../../hooks/usePosts';
import Post from './Post';
import LoaderIcon from '../icons/LoaderIcon';

const PostFeed = () => {
	const { posts, isLoading, getMorePosts, morePostsAvailable } = usePosts();

	return (
		<>
			<AddPost />
			{isLoading ? (
				<span className='w-10 mt-20 text-[var(--contrast)] animate-spin'>
					<LoaderIcon />
				</span>
			) : (
				<div className='flex flex-col overflow-scroll'>
					{posts.map((post) => (
						<Post
							key={post.id}
							post={post}
						/>
					))}
					{morePostsAvailable && (
						<button
							className='py-5 text-[var(--contrast)] hover:bg-zinc-900 duration-300'
							onClick={getMorePosts}>
							See more
						</button>
					)}
				</div>
			)}
		</>
	);
};

export default PostFeed;
