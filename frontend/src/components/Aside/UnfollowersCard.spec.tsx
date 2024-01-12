import { RenderResult, render } from '@testing-library/react';
import UnfollowersCard from './UnfollowersCard';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { mockStore } from '../../tests/utils/store/store.mock';

describe('UnfollowersCard', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<UnfollowersCard />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', async () => {
		component.getByText('Who to follow');
		component.getByRole('button', { name: 'Follow' });
	});
});
