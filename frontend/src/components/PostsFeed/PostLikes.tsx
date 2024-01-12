import { LikeIcon } from '../icons/LikeIcon';
import { useLikes } from '../../hooks/useLikes';

interface PostLikesProps {
	postId: string;
}
const PostLikes = ({ postId }: PostLikesProps) => {
	const { likes, isLiked, toggleLikes } = useLikes(postId);

	return (
		<div
			role='like-container'
			className={`cursor-pointer flex items-center gap-1 w-fit ${
				isLiked ? 'text-[var(--like)] hover:text-[var(--like)]' : 'text-zinc-500 hover:text-[var(--like)]'
			}`}
			onClick={toggleLikes}>
			<span className='w-5'>
				<LikeIcon isLiked={isLiked} />
			</span>
			<p>{likes}</p>
		</div>
	);
};

export default PostLikes;
