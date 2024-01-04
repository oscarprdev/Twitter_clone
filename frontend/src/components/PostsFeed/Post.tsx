import { Post } from '../../types/posts';
import { strDateToTime } from '../../utils/strDateToTime';
import PostLikes from './PostLikes';

interface PostProps {
	post: Post;
}

const Post = ({ post }: PostProps) => {
	return (
		<article className='flex items-start gap-4 w-full min-h-[150px] p-4 border-b-[1px] border-b-zinc-500'>
			<figure className='w-12 h-12 bg-zinc-200 rounded-full'></figure>
			<div className='flex flex-col h-full'>
				<header className='flex items-center gap-2 text-zinc-500'>
					<p className='text-white font-bold'>{post.name}</p>
					<p>@{post.username}</p>
					<span className='w-[2px] h-[2px] bg-zinc-500 rounded-full' />
					<p>{strDateToTime(post.updatedAt)}</p>
				</header>
				<p className='flex-grow text-white text-lg'>{post.post}</p>
				<footer>
					<PostLikes postId={post.id} />
				</footer>
			</div>
		</article>
	);
};

export default Post;