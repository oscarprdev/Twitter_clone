import { useAddFollow } from '../../hooks/useAddFollow';

interface AddFollowBtnProps {
	id: string;
}

const AddFollowBtn = ({ id }: AddFollowBtnProps) => {
	const { handleAddFollowClick } = useAddFollow(id);

	return (
		<button
			onClick={handleAddFollowClick}
			className='px-5 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'>
			<p>Follow</p>
		</button>
	);
};

export default AddFollowBtn;
