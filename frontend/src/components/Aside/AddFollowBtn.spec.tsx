import { RenderResult, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddFollowBtn from './AddFollowBtn';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { mockStore } from './UnfollowersCard.spec';

describe('AddFollowBtn', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<AddFollowBtn id='mocked-id-2' />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('button', { name: 'Follow' });
	});
});
