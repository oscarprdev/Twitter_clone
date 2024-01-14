import { RenderResult, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import { server } from '../../../tests/unit/server/server.mock';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/unit/store/store.mock';
import ProfilePosts from './ProfilePosts';
import { userTestResponse } from '../../../tests/unit/responses/users.response';
import { testGetPostsByUserHandler } from '../../../tests/unit/handlers/posts.handlers';

describe('ProfilePosts', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<ProfilePosts id={userTestResponse.id} />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('Should render properly', async () => {
		server.use(testGetPostsByUserHandler);

		await waitFor(() => {
			component.getByRole('post');
		});
	});
});
