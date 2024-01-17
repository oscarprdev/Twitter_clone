import { ReactNode } from 'react';

interface PageWrapperProps {
	title?: string;
	children: ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
	return (
		<section className='overflow-y-scroll flex flex-col items-center w-[650px] h-full border border-y-0 border-x-zinc-700'>
			{title && (
				<div className='w-full text-xl px-5 py-2 border-b border-b-zinc-700'>
					<h1>{title}</h1>
				</div>
			)}
			{children}
		</section>
	);
};

export default PageWrapper;
