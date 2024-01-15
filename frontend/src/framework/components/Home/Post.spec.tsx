import { RenderResult, render } from '@testing-library/react';
import Post from './Post';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { strDateToTime } from '../../utils/strDateToTime';
import { postResponse } from '../../../tests/unit/responses/posts.response';

describe('Post', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(<Post post={postResponse} />);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByText(`${postResponse.owner.name} ${postResponse.owner.surname}`);
		component.getByText(`@${postResponse.owner.username}`);
		component.getByText(strDateToTime(postResponse.updatedAt));
		component.getByText(postResponse.post);
		component.getByRole('post-header');
		component.getByRole('post-footer');
		component.getByRole('post');
	});
});