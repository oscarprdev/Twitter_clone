import NavItem from './NavItem';
import { HomeIcon } from './icons/HomeIcon';
import { HomeActiveIcon } from './icons/HomeActiveIcon';
import { describe, it, beforeEach, afterEach, expect } from 'vitest';

import { fireEvent, render, RenderResult } from '@testing-library/react';

describe('NavItem', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<NavItem
				text='item'
				defaultIcon={<HomeIcon />}
				activeIcon={<HomeActiveIcon />}
			/>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByText('item');
		component.getByTestId('home-icon');
	});

	it('should have proper styles', () => {
		const p = component.getByText('item');
		expect(p.className).toContain('font-light');
	});

	it('Should display activeIcon at click event', () => {
		fireEvent.click(component.getByRole('link'));

		component.getByTestId('home-active-icon');
	});

	it('Should update the location at click event', () => {
		fireEvent.click(component.getByRole('link'));

		expect(window.location.pathname).toBe('/item');
	});

	it('Should modify the font-weight at click event', () => {
		const p = component.getByText('item');

		fireEvent.click(component.getByRole('link'));

		expect(p.className).toContain('font-bold');
	});
});
