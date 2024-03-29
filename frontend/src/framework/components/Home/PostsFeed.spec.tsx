import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import PostFeed from './PostsFeed';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { server } from '../../../../tests/unit/server/server.mock';
import { testAddPostHandler, testGetMorePostsHandler, testGetPostsHandler } from '../../../../tests/unit/handlers/posts.handlers';
import { addPost, getPosts } from '../../store/slices/posts-slice';
import { postResponse } from '../../../../tests/shared/responses/posts.response';

describe('PostFeed', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<PostFeed />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('Should render successfully', () => {
		component.getByRole('form');
	});

	it('Should display properly posts', async () => {
		server.use(testGetPostsHandler);

		mockStore.dispatch(getPosts({ posts: [postResponse] }));

		await waitFor(() => {
			component.getByTestId('post');
		});
	});

	it('Should add a post on posts feed if user add a post', async () => {
		server.use(testGetPostsHandler);
		server.use(testAddPostHandler);

		mockStore.dispatch(getPosts({ posts: [postResponse] }));

		await waitFor(() => {
			const posts = component.getAllByTestId('post');
			expect(posts).toHaveLength(1);
		});

		const textarea = component.getByRole('textarea');
		const button = component.getByRole('button', { name: 'Post' });

		fireEvent.change(textarea, { target: { value: 'test content' } });
		fireEvent.click(button);

		mockStore.dispatch(addPost({ post: postResponse }));
		server.use(testGetMorePostsHandler);

		await waitFor(() => {
			const posts = component.getAllByTestId('post');
			expect(posts).toHaveLength(2);
		});
	});
});
