import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import UnfollowersCard from './UnfollowersCard';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/unit/store/store.mock';
import { server } from '../../../tests/unit/server/server.mock';
import {
	testAddFollowerHandler,
	testGetUnfollowersEmptyHandler,
	testGetUnfollowersHandler,
} from '../../../tests/unit/handlers/followers.handlers';
import { SuccessfulGetUnfollowersResponse } from '../../../tests/unit/responses/follows/get-unfollowers.response';
import { updateUnfollowers } from '../../store/slices/users-slice';

describe('UnfollowersCard', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<UnfollowersCard />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();

		mockStore.dispatch(updateUnfollowers({ unfollowers: [] }));
	});

	it('Should render successfully', async () => {
		server.use(testGetUnfollowersHandler);

		await waitFor(() => {
			component.getByText('Who to follow');
			component.getByRole('button', { name: 'Follow' });
			component.getByText(SuccessfulGetUnfollowersResponse.unfollowers[0].name);
		});
	});

	it('Should render successfully an empty list', async () => {
		server.use(testGetUnfollowersEmptyHandler);

		await waitFor(() => {
			component.getByText('No more users');
		});
	});

	it('Should remove and user from list after click on button', async () => {
		server.use(testGetUnfollowersHandler);
		server.use(testAddFollowerHandler);

		await waitFor(() => {
			component.getByText(SuccessfulGetUnfollowersResponse.unfollowers[0].name);
			const button = component.getByRole('button', { name: 'Follow' });

			fireEvent.click(button);
		});

		await waitFor(() => {
			component.getByText('No more users');
		});
	});
});
