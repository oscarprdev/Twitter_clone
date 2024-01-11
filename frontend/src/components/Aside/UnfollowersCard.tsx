import Unfollower from './Unfollower';
import { useUnfollowers } from '../../hooks/useUnfollowers';

const UnfollowersCard = () => {
	const { unfollowers } = useUnfollowers();

	const unfollowersList = () => {
		return unfollowers.map((unfollower) => (
			<Unfollower
				key={crypto.randomUUID()}
				unfollower={unfollower}
			/>
		));
	};

	return (
		<section className='flex flex-col w-full py-5 bg-zinc-900 rounded-xl'>
			<h2 className='font-extrabold text-2xl ml-5 mb-5'>Who to follow</h2>
			{unfollowers.length > 0 ? unfollowersList() : <p>No unfollowers</p>}
		</section>
	);
};

export default UnfollowersCard;
