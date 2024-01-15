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
				<ul className='flex flex-col w-full overflow-y-scroll border-t border-t-zinc-700'>
					{posts.length > 0 ? (
						posts.map((post) => (
							<Post
								key={post.id}
								post={post}
							/>
						))
					) : (
						<div className='w-full h-20 grid place-items-center'>
							<p>Empty list of posts</p>
						</div>
					)}
					{morePostsAvailable && (
						<button
							className='py-5 text-[var(--contrast)] hover:bg-zinc-900 duration-300'
							onClick={getMorePosts}>
							See more
						</button>
					)}
				</ul>
			)}
		</>
	);
};

export default PostFeed;
