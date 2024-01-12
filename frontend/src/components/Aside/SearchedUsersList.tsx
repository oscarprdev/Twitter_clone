import { Link } from 'wouter';
import { User } from '../../features/shared/types/user';
import UserImage from '../UserImage';

interface SearchedUsersListProps {
	searchedUsers: User[];
}

const SearchedUsersList = ({ searchedUsers }: SearchedUsersListProps) => {
	return (
		<section className='absolute top-[110%] h-fit max-h-[400px] w-full py-2 bg-black border border-zinc-400 rounded-xl'>
			{searchedUsers.length > 0 ? (
				<>
					<p className='ml-5'>Users:</p>
					<div className='mt-2'>
						{searchedUsers.map((user) => (
							<Link
								key={user.id}
								href={`/user/${user.id}`}
								className='flex gap-2 hover:bg-zinc-900 p-2 cursor-pointer pl-4'>
								<UserImage userImage={user.profileImgUrl} />
								<div className='flex flex-col'>
									<p className='font-extrabold text-white'>
										{user.name} {user.surname}
									</p>
									<p className='text-zinc-500'>@{user.username}</p>
								</div>
							</Link>
						))}
					</div>
				</>
			) : (
				<div className='py-5 ml-[25%]'>
					<p className='font-light text-zinc-500'>Try with another name...</p>
				</div>
			)}
		</section>
	);
};

export default SearchedUsersList;
