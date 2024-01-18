import { RenderResult, render } from '@testing-library/react';
import Post from './Post';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import { strDateToTime } from '../../utils/strDateToTime';
import { postResponse } from '../../../tests/unit/responses/posts.response';
import { Provider } from 'react-redux';
import { mockStore } from '../../../tests/unit/store/store.mock';
import { server } from '../../../tests/unit/server/server.mock';
import { testUserLoggedHandler } from '../../../tests/unit/handlers/users.handlers';

describe('Post', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<Post post={postResponse} />
			</Provider>
		);

		server.use(testUserLoggedHandler);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

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
