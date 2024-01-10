import { useEffect, useState } from 'react';
import { User } from '../../types/user';
import { getUnfollowersUsecase } from '../../features/followers/graph';
import { useStoreSelector } from '../../store/hooks/useSelector';
import Unfollower from './Unfollower';

const UnfollowersCard = () => {
	const userLogged = useStoreSelector((state) => state.users.userLogged);
	const [unfollowers, setUnfollowers] = useState<User[]>([]);

	useEffect(() => {
		const getUnfollowers = async () => {
			const unfollowersResponse = await getUnfollowersUsecase.getUnfollowers({ userId: userLogged.id });

			if (unfollowersResponse.state === 'success') {
				setUnfollowers(unfollowersResponse.unfollowers);
			}
		};

		getUnfollowers();
	});

	return (
		<section className='flex flex-col w-full py-5 bg-zinc-900 rounded-xl'>
			<h2 className='font-extrabold text-2xl ml-5 mb-5'>Who to follow</h2>
			{unfollowers.length > 0 ? unfollowers.map((unfollower) => <Unfollower unfollower={unfollower} />) : <p>No unfollowers</p>}
		</section>
	);
};

export default UnfollowersCard;
