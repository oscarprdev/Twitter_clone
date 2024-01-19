import { RenderResult, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import { server } from '../../../../tests/unit/server/server.mock';
import { Provider } from 'react-redux';
import ProfileHeader from './ProfileHeader';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../tests/unit/responses/users.response';
import { testGetPostsByUserHandler } from '../../../../tests/unit/handlers/posts.handlers';
import { getProfilePosts } from '../../store/slices/posts-slice';
import { postResponse } from '../../../../tests/unit/responses/posts.response';

describe('ProfileHeader', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<ProfileHeader
					name={userTestResponse.name}
					surname={userTestResponse.surname}
					id={userTestResponse.id}
				/>
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('Should render properly', async () => {
		server.use(testGetPostsByUserHandler);

		mockStore.dispatch(getProfilePosts({ posts: [postResponse] }));

		component.getByRole('heading');
		component.getByText(`${userTestResponse.name} ${userTestResponse.surname}`);

		await waitFor(() => {
			component.getByText('1 posts');
		});
	});
});
