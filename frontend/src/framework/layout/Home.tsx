import PageWrapper from '../components/PageWrapper';
import PostFeed from '../components/Home/PostsFeed';

const Home = () => {
	return (
		<PageWrapper
			title='Home'
			dataTestid='home'>
			<PostFeed />
		</PageWrapper>
	);
};

export default Home;
