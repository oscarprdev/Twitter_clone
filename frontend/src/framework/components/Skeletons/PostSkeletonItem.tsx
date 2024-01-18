import SkeletonItem from './SkeletonItem';

const PostSkeletonItem = () => {
	return (
		<li className='flex items-start gap-4 w-full p-4 border-y-[1px] border-y-zinc-700'>
			<SkeletonItem
				image
				rounded
			/>
			<div className='flex flex-col gap-3 min-h-[100px] w-[90%]'>
				<header
					className='flex items-center gap-2 text-zinc-500'
					role='post-header'>
					<SkeletonItem
						small
						rounded
					/>
					<SkeletonItem
						medium
						rounded
					/>
					<SkeletonItem
						small
						rounded
					/>
				</header>
				<div className='flex flex-col gap-2'>
					<SkeletonItem
						large
						rounded
					/>
					<SkeletonItem
						large
						rounded
					/>
					<SkeletonItem
						medium
						rounded
					/>
				</div>
			</div>
		</li>
	);
};

export default PostSkeletonItem;
