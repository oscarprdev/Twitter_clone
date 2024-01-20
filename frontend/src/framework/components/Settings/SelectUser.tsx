import { useState } from 'react';
import { User } from '../../../features/shared/domain/types/user';
import { loginUsecase } from '../../../features/users/graph';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useStoreSelector } from '../../store/hooks/useSelector';
import { navigate } from 'wouter/use-location';
import LoaderIcon from '../icons/LoaderIcon';
import SettingsUsersList from '../Skeletons/SettingsUsersList';
import UserItem from '../UserItem';

const SelectUser = () => {
	const [loginLoading, setLoginLoading] = useState(false);
	const [userSelected, setUserSelected] = useState<User>();
	const { users, loading } = useAllUsers();

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
		setLoginLoading(true);
		setUserSelected(users.find((user) => user.email === email));
		await loginUsecase.logIn({ email, password: '1234' });
		navigate('/');
		setLoginLoading(false);
	};

	return (
		<>
			<ul className='flex flex-col mt-10 w-[70%] max-h-[500px] gap-5 py-2 bg-black border border-zinc-700 rounded-xl overflow-scroll'>
				{loading ? (
					<SettingsUsersList />
				) : (
					users.sort(sortUsersByUserLoggedId).map((user) => (
						<li
							key={user.id}
							className='flex gap-2 hover:bg-zinc-900 p-2 cursor-pointer pl-4'>
							<UserItem user={user} />
							{user.id !== userLogged.id && (
								<button
									disabled={loginLoading}
									onClick={() => handleLoginClick(user.email)}
									className='ml-auto px-8 font-bold bg-white hover:bg-slate-200 duration-200 text-black rounded-full'>
									{loginLoading && userSelected?.email === user.email ? (
										<span className='block w-6 h-6 text-zinc-700 animate-spin'>
											<LoaderIcon />
										</span>
									) : (
										'Login'
									)}
								</button>
							)}
						</li>
					))
				)}
			</ul>
		</>
	);
};

export default SelectUser;
