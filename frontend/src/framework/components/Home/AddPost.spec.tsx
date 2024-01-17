import { describe, it, beforeEach, afterEach, expect, beforeAll, afterAll } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import AddPost from './AddPost';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/unit/store/store.mock';
import { server } from '../../../tests/unit/server/server.mock';
import { testAddPostHandler, testGetPostsHandler } from '../../../tests/unit/handlers/posts.handlers';
import { addPost } from '../../store/slices/posts-slice';
import { postResponse } from '../../../tests/unit/responses/posts.response';

describe('AddPost', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<AddPost />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('should render successfully', () => {
		component.getByRole('textarea');
		component.getByRole('form');

		const button = component.getByRole('button', { name: 'Post' });
		expect(button.className).toContain('opacity-70');
	});

	it('should update textarea value on change event', () => {
		const textarea = component.getByRole('textarea');

		fireEvent.change(textarea, { target: { value: 'test content' } });

		if (textarea instanceof HTMLTextAreaElement) {
			expect(textarea.value).toBe('Test content');
		}
	});

	it('Should update button disabled status when textarea value length is greater than 0', () => {
		const textarea = component.getByRole('textarea');
		const button = component.getByRole('button', { name: 'Post' });

		expect(button.getAttribute('disabled')).toBe('');

		fireEvent.change(textarea, { target: { value: 'test content' } });

		expect(button.getAttribute('disabled')).not.toBe('');
	});

	it('Should add a post when user clicks on Post button', async () => {
		server.use(testGetPostsHandler);
		server.use(testAddPostHandler);

		const textarea = component.getByRole('textarea');
		const button = component.getByRole('button', { name: 'Post' });

		fireEvent.change(textarea, { target: { value: 'test content' } });
		fireEvent.click(button);

		mockStore.dispatch(addPost({ post: postResponse }));

		const { posts } = mockStore.getState();

		expect(posts.posts).toHaveLength(1);
	});
});
