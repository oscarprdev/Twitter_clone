import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, it } from 'vitest';
import Unfollower from './Unfollower';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/utils/store/store.mock';
import { userMocked } from '../../../tests/utils/entities/user.mock';

describe('Unfollower', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<Unfollower unfollower={userMocked} />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('img');
		component.getByText(userMocked.name);
		component.getByText(`@${userMocked.username}`);
		component.getByRole('button', { name: 'Follow' });
	});
});
