import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, it } from 'vitest';
import PostFeed from './PostsFeed';
import { configureStore } from '@reduxjs/toolkit';
import { PostSlice } from '../../store/slices/posts-slice';
import { Provider } from 'react-redux';

const mockStore = configureStore({
	reducer: {
		posts: PostSlice.reducer,
	},
});

describe('AddPost', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<PostFeed />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('form');
		component.getByRole('loader-icon');
	});
});
