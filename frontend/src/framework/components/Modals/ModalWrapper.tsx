import { ReactNode } from 'react';
import { CloseIcon } from '../icons/CloseIcon';
import { useModal } from '../../hooks/useModal';

interface ModalProps {
	children: ReactNode;
}

const ModalWrapper = ({ children }: ModalProps) => {
	const { closeModal } = useModal();

	return (
		<div
			role='modal-wrapper'
			className='absolute flex justify-center top-0 w-full h-full bg-[var(--backdrop)]'>
			<div className='relative p-5 pt-10 mt-[3%] w-fit h-fit min-w-[300px] bg-black rounded-2xl'>
				<div
					onClick={closeModal}
					className='absolute grid place-items-center w-10 h-10 text-white rounded-full p-2 top-2 left-2 cursor-pointer hover:bg-zinc-900 duration-300'>
					<CloseIcon />
				</div>
				{children}
			</div>
		</div>
	);
};

export default ModalWrapper;
