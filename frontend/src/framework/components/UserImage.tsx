interface UserImageProps {
	userImage: string;
}

const UserImage = ({ userImage }: UserImageProps) => {
	return (
		<figure className='w-12 h-12 bg-zinc-200 rounded-full overflow-hidden'>
			<img
				src={userImage}
				alt='Profile image'
				className='w-full h-full object-cover'
			/>
		</figure>
	);
};

export default UserImage;
