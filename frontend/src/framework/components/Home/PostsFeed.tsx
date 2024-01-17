import AddPost from './AddPost';
import usePosts from '../../hooks/usePosts';
import Post from './Post';

const PostFeed = () => {
	const { posts, getMorePosts, morePostsAvailable } = usePosts();

	return (
		<>
			<AddPost />
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
		</>
	);
};

export default PostFeed;
