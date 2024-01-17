import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import ProfileNavContainer from './ProfileNavContainer';
import { userTestResponse } from '../../../tests/unit/responses/users.response';
import { server } from '../../../tests/unit/server/server.mock';
import { testGetPostsByUserHandler } from '../../../tests/unit/handlers/posts.handlers';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/unit/store/store.mock';
import { testGetFollowersHandler, testGetFollowingsHandler } from '../../../tests/unit/handlers/followers.handlers';
import { getProfilePosts } from '../../store/slices/posts-slice';
import { postResponse } from '../../../tests/unit/responses/posts.response';

describe('ProfileNavContainer', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<ProfileNavContainer
					id={userTestResponse.id}
					followers={[userTestResponse]}
					followings={[userTestResponse]}
				/>
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('Should render properly posts by default', async () => {
		server.use(testGetPostsByUserHandler);
		mockStore.dispatch(getProfilePosts({ posts: [postResponse] }));

		component.getByRole('profile-nav');

		await waitFor(() => {
			component.getByRole('post');
		});
	});

	it('Should render followers if followers nav is clicked', async () => {
		server.use(testGetPostsByUserHandler);
		server.use(testGetFollowersHandler);

		component.getByRole('profile-nav');

		const followersTab = component.getByText('Followers');

		fireEvent.click(followersTab);

		await waitFor(() => {
			component.getByRole('profile-user-item');
		});
	});

	it('Should render followings if followers nav is clicked', async () => {
		server.use(testGetPostsByUserHandler);
		server.use(testGetFollowingsHandler);

		component.getByRole('profile-nav');

		const followingTab = component.getByText('Following');

		fireEvent.click(followingTab);

		await waitFor(() => {
			component.getByRole('profile-user-item');
		});
	});
});
