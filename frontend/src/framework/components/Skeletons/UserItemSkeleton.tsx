import SkeletonItem from './SkeletonItem';

interface UserItemSkeletonProps {
	button?: boolean;
}

const UserItemSkeleton = ({ button }: UserItemSkeletonProps) => {
	return (
		<li className='flex items-center justify-between gap-2 hover:bg-zinc-900 p-2 cursor-pointer px-4'>
			<div className='flex items-center flex-grow gap-5'>
				<SkeletonItem
					image
					rounded
				/>
				<div className='flex flex-col gap-2'>
					<SkeletonItem
						small
						rounded
					/>
					<SkeletonItem
						medium
						rounded
					/>
				</div>
			</div>

			{button && (
				<SkeletonItem
					button
					rounded
				/>
			)}
		</li>
	);
};

export default UserItemSkeleton;
