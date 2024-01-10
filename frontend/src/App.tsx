import { postsStore } from './store/posts/posts-store';
import { Provider } from 'react-redux';
import { ModalProvider } from './context/ModalProvider';
import Layout from './layout/Layout';

function App() {
	return (
		<Provider store={postsStore}>
			<ModalProvider>
				<Layout />
			</ModalProvider>
		</Provider>
	);
}

export default App;
