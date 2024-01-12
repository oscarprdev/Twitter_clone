import SearchContainer from './SearchContainer';
import UnfollowersCard from './UnfollowersCard';

const Aside = () => {
	return (
		<aside className='flex flex-col gap-4 items-start justify-start p-5 w-[25vw] pr-25'>
			<SearchContainer />
			<UnfollowersCard />
		</aside>
	);
};

export default Aside;
