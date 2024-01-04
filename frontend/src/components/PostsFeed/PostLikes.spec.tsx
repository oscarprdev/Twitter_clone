import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import PostLikes from './PostLikes';

describe('AddPost', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(<PostLikes postId='1' />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByRole('like-icon');
		component.getByText('0');

		const likeContainer = component.getByRole('like-container');
		expect(likeContainer.className).toContain('hover:text-[var(--like)]');
	});
});
