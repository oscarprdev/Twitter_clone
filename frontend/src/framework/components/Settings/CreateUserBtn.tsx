import { useModal } from '../../hooks/useModal';
import CreateUserModal from '../Modals/CreateUserModal';

const CreateUserBtn = () => {
	const modal = useModal();

	const handleCreateUserClick = () => {
		modal.openModal(<CreateUserModal />);
	};

	return (
		<button
			onClick={handleCreateUserClick}
			className='px-8 py-5 mt-10 border font-bold border-zinc-600 rounded-full hover:bg-zinc-900 duration-300'>
			Create user
		</button>
	);
};

export default CreateUserBtn;
