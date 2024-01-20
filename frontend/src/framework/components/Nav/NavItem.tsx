import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

interface NavItemProps {
	text: string;
	defaultIcon: ReactNode;
	activeIcon: ReactNode;
}

const NavItem = ({ text, defaultIcon, activeIcon }: NavItemProps) => {
	const [isActive, setIsActive] = useState(false);
	const [location] = useLocation();

	useEffect(() => {
		if ((location === '/' && text === 'home') || location.match(text.toLowerCase().slice(1, text.length))) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [location, text]);

	return (
		<Link
			href={`/${text === 'home' ? '' : text.toLowerCase()}`}
			className='flex items-center justify-start gap-5 py-2 pr-8 px-4 w-fit rounded-full hover:bg-zinc-900'>
			<span className='block w-7'>{isActive ? activeIcon : defaultIcon}</span>
			<p className={`capitalize text-xl ${isActive ? 'font-bold' : 'font-light'}`}>{text}</p>
		</Link>
	);
};

export default NavItem;
