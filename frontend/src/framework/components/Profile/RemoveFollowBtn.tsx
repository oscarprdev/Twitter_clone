import { useRemoveFollow } from '../../hooks/useRemoveFollow';

interface RemoveFollowBtnProps {
	id: string;
}

const RemoveFollowBtn = ({ id }: RemoveFollowBtnProps) => {
	const { handleRemoveFollowClick } = useRemoveFollow(id);

	return (
		<button
			onClick={handleRemoveFollowClick}
			className='ml-auto px-5 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'>
			<p>Unfollow</p>
		</button>
	);
};

export default RemoveFollowBtn;
