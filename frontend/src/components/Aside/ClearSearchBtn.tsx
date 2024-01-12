import { CloseIcon } from '../icons/CloseIcon';

interface ClearSearchBtnProps {
	handleClearSearch(): void;
}

const ClearSearchBtn = ({ handleClearSearch }: ClearSearchBtnProps) => {
	return (
		<span
			onMouseDown={(e) => {
				e.preventDefault();
				handleClearSearch();
			}}
			className='cursor-pointer absolute w-6 h-6 top-[0.75rem] right-5 p-1 rounded-full bg-[var(--contrast)] hover:bg-[var(--contrast-dark)]'>
			<CloseIcon />
		</span>
	);
};

export default ClearSearchBtn;
