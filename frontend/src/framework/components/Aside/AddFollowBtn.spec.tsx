import { RenderResult, fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddFollowBtn from './AddFollowBtn';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import { mockStore } from '../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../tests/unit/responses/users.response';
import { server } from '../../../tests/unit/server/server.mock';
import { testAddFollowerHandler } from '../../../tests/unit/handlers/followers.handlers';

describe('AddFollowBtn', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<AddFollowBtn id={userTestResponse.id} />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('Should render successfully', () => {
		component.getByRole('button', { name: 'Follow' });
	});

	it('Should call to api when click on button ', () => {
		server.use(testAddFollowerHandler);

		const button = component.getByRole('button', { name: 'Follow' });

		fireEvent.click(button);
	});
});
