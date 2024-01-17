interface ToastErrorProps {
	errorMessage: string;
}

const ToastError = ({ errorMessage }: ToastErrorProps) => {
	return (
		<article className='animate-fade-up absolute left-5 bottom-5 p-5 rounded-md bg-red-600'>
			<p className='font-bold'>{errorMessage}</p>
		</article>
	);
};

export default ToastError;
