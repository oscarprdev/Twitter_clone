import { describe, it, beforeEach, afterEach } from 'vitest';

import { render, RenderResult } from '@testing-library/react';
import Nav from './Nav';

describe('NavItem', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(<Nav />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByTestId('brand-icon');

		component.getByText('home');
		component.getByTestId('home-icon');

		component.getByText('profile');
		component.getByTestId('profile-icon');

		component.getByText('settings');
		component.getByTestId('settings-icon');
	});
});
