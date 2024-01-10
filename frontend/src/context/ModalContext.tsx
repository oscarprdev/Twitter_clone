import { createContext } from 'react';

interface ModalContext {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

const modalContextState: ModalContext = {
	isOpen: false,
	openModal() {},
	closeModal() {},
};

export const ModalContext = createContext<ModalContext>(modalContextState);
