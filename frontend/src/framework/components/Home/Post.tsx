import { Post } from '../../../features/shared/domain/types/posts';
import { strDateToTime } from '../../utils/strDateToTime';
import UserImage from '../UserImage';
import PostLikes from './PostLikes';

interface PostProps {
	post: Post;
}

const Post = ({ post }: PostProps) => {
	return (
		<article
			role='post'
			className='flex items-start gap-4 w-full min-h-[150px] p-4 border-y-[1px] border-y-zinc-700'>
			<UserImage userImage={post.owner.profileImgUrl} />
			<div className='flex flex-col h-full w-[90%]'>
				<header
					className='flex items-center gap-2 text-zinc-500'
					role='post-header'>
					<p className='text-white font-extrabold'>
						{post.owner.name} {post.owner.surname}
					</p>
					<p>@{post.owner.username}</p>
					<span className='w-[2px] h-[2px] bg-zinc-500 rounded-full' />
					<p>{strDateToTime(post.updatedAt)}</p>
				</header>
				<p className='flex-grow text-white text-lg'>{post.post}</p>
				<footer role='post-footer'>
					<PostLikes postId={post.id} />
				</footer>
			</div>
		</article>
	);
};

export default Post;
