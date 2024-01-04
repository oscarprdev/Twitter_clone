import { LikeIcon } from '../icons/LikeIcon';
import { useLikes } from '../../hooks/useLikes';

interface PostLikesProps {
	postId: string;
}
const PostLikes = ({ postId }: PostLikesProps) => {
	const { likes } = useLikes(postId);

	return (
		<div className={`cursor-pointer flex items-center gap-1 w-fit text-zinc-500 hover:text-[var(--like)]`}>
			<span className='w-4'>
				<LikeIcon />
			</span>
			<p>{likes}</p>
		</div>
	);
};

export default PostLikes;
