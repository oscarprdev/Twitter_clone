import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import PostLikes from './PostLikes';
import { mockHandlers, serverMocked } from '../../../tests/utils/server/server.mock';
import { postMocked } from '../../../tests/utils/entities/post.mock';

describe('AddPost', () => {
	let component: RenderResult;

	beforeAll(() => serverMocked.listen());
	afterAll(() => serverMocked.close());

	beforeEach(() => {});

	afterEach(() => {
		serverMocked.close();
		component.unmount();
	});

	it('should render successfully', () => {
		serverMocked.use(...mockHandlers);

		component = render(<PostLikes postId={postMocked.id} />);

		component.getByRole('like-icon');
		component.getByText('0');

		const likeContainer = component.getByRole('like-container');

		expect(likeContainer.className).toContain('hover:text-[var(--like)]');
	});

	it('Should update likes if user clicks on like icon', async () => {
		serverMocked.use(...mockHandlers);

		component = render(<PostLikes postId={postMocked.id} />);

		const iconContainer = component.getByRole('like-container');

		fireEvent.click(iconContainer);

		await waitFor(() => {
			component.getByText('1');
		});
	});
});
