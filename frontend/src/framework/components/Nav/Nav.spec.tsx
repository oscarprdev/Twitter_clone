import { describe, it, beforeEach, afterEach } from 'vitest';

import { render, RenderResult } from '@testing-library/react';
import Nav from './Nav';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';

describe('NavItem', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<Nav />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByTestId('brand-icon');

		component.getByText('home');
		component.getByTestId('home-active-icon');

		component.getByText('profile');
		component.getByTestId('profile-icon');

		component.getByText('settings');
		component.getByTestId('settings-icon');
	});
});
