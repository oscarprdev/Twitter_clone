interface SkeletonItemProps {
	small?: boolean;
	medium?: boolean;
	large?: boolean;
	image?: boolean;
	rounded?: boolean;
	button?: boolean;
}

const SkeletonItem = ({ small, medium, large, image, rounded, button }: SkeletonItemProps) => {
	return (
		<span
			className={`bg-zinc-600 animate-pulse  ${image ? 'w-14 h-14' : ''} ${
				small ? 'w-20 h-5' : medium ? 'w-40 h-5' : large ? 'w-full h-5' : ''
			} ${rounded ? 'rounded-full' : 'rounded-md'} ${button ? 'w-24 h-10' : ''}`}
		/>
	);
};

export default SkeletonItem;
