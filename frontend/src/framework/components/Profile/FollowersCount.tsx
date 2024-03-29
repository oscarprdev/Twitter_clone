interface FollowersCountProps {
	followersCount: number;
	followingCount: number;
}

const FollowersCount = ({ followersCount, followingCount }: FollowersCountProps) => {
	return (
		<div
			aria-roledescription='followers-counter'
			className='flex items-center gap-5 px-5 mt-3'>
			<p
				role='followings-counter'
				className='text-zinc-500 font-light'>
				<span className='text-white font-extrabold'>{followingCount}</span> following
			</p>
			<p
				role='followers-counter'
				className='text-zinc-500 font-light'>
				<span className='text-white font-extrabold'>{followersCount}</span> followers
			</p>
		</div>
	);
};

export default FollowersCount;
