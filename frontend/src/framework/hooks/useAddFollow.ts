import { useState } from 'react';
import { addFollowUsecase } from '../../features/followers/graph';
import { useStoreSelector } from '../store/hooks/useSelector';

export const useAddFollow = (followToId: string) => {
	const [loading, setLoading] = useState(false);
	const userLogged = useStoreSelector((state) => state.users.userLogged);

	const handleAddFollowClick = async () => {
		setLoading(true);
		await addFollowUsecase.addFollow({
			userId: userLogged.id,
			followTo: followToId,
		});
		setLoading(false);
	};

	return { handleAddFollowClick, loading };
};
