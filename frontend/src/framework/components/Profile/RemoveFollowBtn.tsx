import LoaderIcon from '../icons/LoaderIcon';

interface RemoveFollowBtnProps {
	handleRemoveFollowClick: () => Promise<void>;
	loading: boolean;
}

const RemoveFollowBtn = ({ handleRemoveFollowClick, loading }: RemoveFollowBtnProps) => {
	return (
		<button
			onClick={handleRemoveFollowClick}
			className={`ml-auto px-5 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full`}>
			{loading ? (
				<span className='block w-6 h-6 text-zinc-700 animate-spin'>
					<LoaderIcon />
				</span>
			) : (
				<p>Unfollow</p>
			)}
		</button>
	);
};

export default RemoveFollowBtn;
