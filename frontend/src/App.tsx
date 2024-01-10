import { store } from './store/store';
import { Provider } from 'react-redux';
import { ModalProvider } from './context/ModalProvider';
import Layout from './layout/Layout';

function App() {
	return (
		<Provider store={store}>
			<ModalProvider>
				<Layout />
			</ModalProvider>
		</Provider>
	);
}

export default App;
