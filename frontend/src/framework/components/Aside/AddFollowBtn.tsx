import LoaderIcon from '../icons/LoaderIcon';

interface AddFollowBtnProps {
	handleAddFollowClick: () => Promise<void>;
	loading: boolean;
}

const AddFollowBtn = ({ handleAddFollowClick, loading }: AddFollowBtnProps) => {
	return (
		<button
			onClick={handleAddFollowClick}
			className='ml-auto px-5 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'>
			{loading ? (
				<span className='block w-6 h-6 text-zinc-700 animate-spin'>
					<LoaderIcon />
				</span>
			) : (
				<p>Follow</p>
			)}
		</button>
	);
};

export default AddFollowBtn;
