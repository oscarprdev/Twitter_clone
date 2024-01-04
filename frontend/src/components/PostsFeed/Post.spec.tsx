import { RenderResult, render } from '@testing-library/react';
import Post from './Post';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { strDateToTime } from '../../utils/strDateToTime';

const mockPost = {
	id: 'id',
	userId: 'userid',
	post: 'post',
	updatedAt: '2023-12-27T23:13:10.788165Z',
	name: 'name',
	surname: 'surname',
	username: 'username',
	email: 'email',
	profileImgUrl: 'img',
};

describe('AddPost', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(<Post post={mockPost} />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByText(mockPost.name);
		component.getByText(`@${mockPost.username}`);
		component.getByText(strDateToTime(mockPost.updatedAt));
		component.getByText(mockPost.post);
		component.getByRole('post-header');
		component.getByRole('post-footer');
		component.getByRole('post');
	});
});
