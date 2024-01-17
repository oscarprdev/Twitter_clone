import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { server } from '../../../tests/unit/server/server.mock';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../tests/unit/responses/users.response';
import RemoveFollowBtn from './RemoveFollowBtn';
import { testRemoveFollowerHandler } from '../../../tests/unit/handlers/followers.handlers';
import { addFollow, removeFollow } from '../../store/slices/users-slice';

describe('RemoveFollowBtn', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<RemoveFollowBtn id={userTestResponse.id} />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('Should render properly', async () => {
		component.getByText('Unfollow');
	});

	it('Should update following and followers users from store if user click on it', async () => {
		server.use(testRemoveFollowerHandler);

		const button = component.getByRole('button', { name: 'Unfollow' });

		fireEvent.click(button);

		mockStore.dispatch(addFollow({ follower: userTestResponse }));

		await waitFor(() => {
			const { users } = mockStore.getState();

			expect(users.followers).toHaveLength(1);
			expect(users.unfollowers).toHaveLength(0);
		});

		mockStore.dispatch(removeFollow({ follower: userTestResponse }));

		const { users } = mockStore.getState();

		expect(users.followers).toHaveLength(0);
		expect(users.unfollowers).toHaveLength(1);
	});
});
