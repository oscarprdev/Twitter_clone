import Aside from './components/Aside';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
	return (
		<main className='flex h-screen w-screen justify-center items-start'>
			<Nav />
			<Main />
			<Aside />
		</main>
	);
}

export default App;
