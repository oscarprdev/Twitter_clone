import AddPost from './AddPost';
import usePosts from '../../hooks/usePosts';

const PostFeed = () => {
	const { posts, isLoading } = usePosts();

	return (
		<section className='flex flex-col items-center w-[800px] h-full border border-y-0 border-x-zinc-500'>
			<AddPost />
			{isLoading ? <p>Is loading</p> : posts.map((post) => <p>{post.post}</p>)}
		</section>
	);
};

export default PostFeed;
