import { Link } from 'wouter';
import { usePostsByUser } from '../../hooks/usePostsByUser';
import ArrowLeft from '../icons/ArrowLeft';

interface ProfileHeaderProps {
	name: string;
	surname: string;
	id: string;
	isInfo?: boolean;
}

const ProfileHeader = ({ name, surname, id, isInfo }: ProfileHeaderProps) => {
	const { posts } = usePostsByUser(id);

	return (
		<header
			role='heading'
			className='pt-5 pb-2 flex items-start w-full'>
			{isInfo && (
				<Link href='/home'>
					<span className='ml-2 p-2 mt-[-0.3rem] rounded-full hover:bg-zinc-800 cursor-pointer'>
						<ArrowLeft />
					</span>
				</Link>
			)}
			<div className='ml-5 flex flex-col justify-start'>
				<p className='capitalize text-xl font-white font-extrabold'>{`${name} ${surname}`}</p>
				<p className='text-zinc-500'>{posts.length} posts</p>
			</div>
		</header>
	);
};

export default ProfileHeader;
