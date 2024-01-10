import { ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';

interface ModalContextProviderProps {
	children: ReactNode;
}

export const ModalProvider = ({ children }: ModalContextProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
