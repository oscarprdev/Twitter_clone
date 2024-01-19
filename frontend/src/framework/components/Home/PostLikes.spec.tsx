import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import PostLikes from './PostLikes';
import { server } from '../../../../tests/unit/server/server.mock';
import { postResponse } from '../../../../tests/shared/responses/posts.response';
import {
	testAddLikeLikeHandler,
	testGetLikesHandler,
	testGetLowerLikesHandler,
	testGetUsersLikesHandler,
	testRemoveLikeLikeHandler,
} from '../../../../tests/unit/handlers/likes.handlers';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';

describe('PostsLikes', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<PostLikes postId={postResponse.id} />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('should render successfully', async () => {
		server.use(testGetLikesHandler);

		component.getByRole('like-icon');

		const likeContainer = component.getByRole('like-container');

		expect(likeContainer.className).toContain('hover:text-[var(--like)]');

		await waitFor(() => {
			component.getByText('5');
		});
	});

	it('Should update likes if user add like', async () => {
		server.use(testGetLikesHandler);
		server.use(testAddLikeLikeHandler);
		server.use(testGetUsersLikesHandler);

		const iconContainer = component.getByRole('like-container');
		fireEvent.click(iconContainer);

		await waitFor(() => {
			server.use(testGetLowerLikesHandler);
			component.getByText('6');
		});
	});

	it('Should update likes if user remove like', async () => {
		server.use(testGetLikesHandler);
		server.use(testRemoveLikeLikeHandler);
		server.use(testGetUsersLikesHandler);

		const iconContainer = component.getByRole('like-container');
		fireEvent.click(iconContainer);

		await waitFor(() => {
			server.use(testGetLowerLikesHandler);
			component.getByText('4');
		});
	});
});
