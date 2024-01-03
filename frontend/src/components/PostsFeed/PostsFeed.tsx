import AddPost from './AddPost';
import { usePostsSelector } from '../../store/posts/hooks/usePostsSelector';

const PostFeed = () => {
	const posts = usePostsSelector((state) => state.posts.posts);

	return (
		<section className='flex flex-col items-center w-[800px] h-full border border-y-0 border-x-zinc-500'>
			<AddPost />
			{posts.map((post) => (
				<p>{post.post}</p>
			))}
		</section>
	);
};

export default PostFeed;
