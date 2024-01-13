import { Link } from 'wouter';
import PageWrapper from '../components/PageWrapper';
import ArrowLeft from '../components/icons/ArrowLeft';

interface UserInfoProps {
	id: string;
}

const UserInfo = ({ id }: UserInfoProps) => {
	return (
		<PageWrapper>
			<header className='flex gap-2 items-center w-full p-2'>
				<Link href='/home'>
					<span className='p-2 rounded-full hover:bg-zinc-800 cursor-pointer'>
						<ArrowLeft />
					</span>
				</Link>
				<p>User info {id}</p>
			</header>
		</PageWrapper>
	);
};

export default UserInfo;
