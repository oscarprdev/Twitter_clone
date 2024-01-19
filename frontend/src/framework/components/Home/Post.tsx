import { Link } from 'wouter';
import { Post } from '../../../features/shared/domain/types/posts';
import { strDateToTime } from '../../utils/strDateToTime';
import UserImage from '../UserImage';
import PostLikes from './PostLikes';

interface PostProps {
	post: Post;
}

const Post = ({ post }: PostProps) => {
	return (
		<li
			data-testid='post'
			className={`${post.isNew && 'animate-appearing'} flex items-start gap-4 w-full p-4 border-y-[1px] border-y-zinc-700`}>
			<UserImage userImage={post.owner.profileImgUrl} />
			<div className='flex flex-col min-h-[100px] w-[90%]'>
				<header
					className='flex items-center gap-2 text-zinc-500'
					role='post-header'>
					<Link
						href={`/user/${post.owner.id}`}
						className='text-white font-extrabold'>
						{post.owner.name} {post.owner.surname}
					</Link>
					<p>@{post.owner.username}</p>
					<span className='w-[2px] h-[2px] bg-zinc-500 rounded-full' />
					<p>{strDateToTime(post.updatedAt)}</p>
				</header>
				<p className='flex-grow text-white text-lg'>{post.post}</p>
				{post.image !== '' && (
					<figure className='w-[80%] my-5 ml-6 h-full border border-zinc-400 rounded-xl overflow-hidden'>
						<img
							src={post.image}
							alt='Post image'
							className='w-full h-full object-cover'
						/>
					</figure>
				)}
				<footer role='post-footer'>
					<PostLikes postId={post.id} />
				</footer>
			</div>
		</li>
	);
};

export default Post;
