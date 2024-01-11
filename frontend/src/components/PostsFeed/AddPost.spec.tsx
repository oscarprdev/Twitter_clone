import { describe, it, beforeEach, afterEach, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import AddPost from './AddPost';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { PostSlice } from '../../store/slices/posts-slice';
import { UsersSlice } from '../../store/slices/users-slice';

const mockStore = configureStore({
	reducer: {
		posts: PostSlice.reducer,
		users: UsersSlice.reducer,
	},
});

describe('AddPost', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<AddPost />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

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

	it('Should update button styles when textarea value length is greater than 0', () => {
		const textarea = component.getByRole('textarea');

		fireEvent.change(textarea, { target: { value: 'test content' } });

		const button = component.getByRole('button', { name: 'Post' });
		expect(button.className).toContain('opacity-none');
	});
});
