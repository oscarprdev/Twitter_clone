import Unfollower from './Unfollower';
import { useUnfollowers } from '../../hooks/useUnfollowers';
import UsersListSkeleton from '../Skeletons/UsersListSkeleton';

const UnfollowersCard = () => {
	const { unfollowers, loading } = useUnfollowers();

	return (
		<section className='flex flex-col w-full py-5 bg-zinc-900 rounded-xl'>
			<h2 className='font-extrabold text-2xl ml-5 mb-5'>Who to follow</h2>
			<ul className='flex flex-col w-full'>
				{loading ? (
					<UsersListSkeleton />
				) : unfollowers.length > 0 ? (
					unfollowers.map((unfollower) => (
						<Unfollower
							key={crypto.randomUUID()}
							unfollower={unfollower}
						/>
					))
				) : (
					<p className='w-full grid place-items-center'>No more users</p>
				)}
			</ul>
		</section>
	);
};

export default UnfollowersCard;
