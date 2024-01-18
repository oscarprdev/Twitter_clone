import { useState } from 'react';
import { User } from '../../../features/shared/domain/types/user';
import { loginUsecase } from '../../../features/users/graph';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useStoreSelector } from '../../store/hooks/useSelector';
import UserImage from '../UserImage';
import { navigate } from 'wouter/use-location';
import LoaderIcon from '../icons/LoaderIcon';

const SelectUser = () => {
	const [loading, setLoading] = useState(false);
	const [userSelected, setUserSelected] = useState<User>();
	const { users } = useAllUsers();

	const userLogged = useStoreSelector((state) => state.users.userLogged);

	const sortUsersByUserLoggedId = (a: User, b: User) => {
		if (a.id === userLogged.id) {
			return -1;
		} else if (b.id === userLogged.id) {
			return 1;
		}

		return 1;
	};

	const handleLoginClick = async (email: string) => {
		setLoading(true);
		setUserSelected(users.find((user) => user.email === email));
		await loginUsecase.logIn({ email, password: '1234' });

		setLoading(false);
		navigate('/');
	};

	return (
		<>
			<ul className='flex flex-col mt-10 w-[70%] max-h-[500px] gap-5 py-2 bg-black border border-zinc-700 rounded-xl overflow-scroll'>
				{users.sort(sortUsersByUserLoggedId).map((user) => (
					<li
						key={user.id}
						className='flex gap-2 hover:bg-zinc-900 p-2 cursor-pointer pl-4'>
						<UserImage userImage={user.profileImgUrl} />
						<div className='flex flex-col'>
							<p className='font-extrabold text-white'>
								{user.name} {user.surname}
							</p>
							<p className='text-zinc-500'>@{user.username}</p>
						</div>
						{user.id !== userLogged.id && (
							<button
								disabled={loading}
								onClick={() => handleLoginClick(user.email)}
								className='ml-auto px-8 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'>
								{loading && userSelected?.email === user.email ? (
									<span className='block w-6 h-6 text-zinc-700 animate-spin'>
										<LoaderIcon />
									</span>
								) : (
									'Login'
								)}
							</button>
						)}
					</li>
				))}
			</ul>
		</>
	);
};

export default SelectUser;
