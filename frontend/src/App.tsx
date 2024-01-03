import Aside from './components/Aside';
import PostFeed from './components/PostsFeed/PostsFeed';
import Nav from './components/Nav/Nav';
import { postsStore } from './store/posts/posts-store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={postsStore}>
			<main className='flex h-screen w-screen justify-center items-start'>
				<Nav />
				<PostFeed />
				<Aside />
			</main>
		</Provider>
	);
}

export default App;
