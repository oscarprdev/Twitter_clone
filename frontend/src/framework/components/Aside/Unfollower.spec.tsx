import { RenderResult, fireEvent, render } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import Unfollower from './Unfollower';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../tests/shared/responses/users.response';
import { server } from '../../../../tests/unit/server/server.mock';
import { testAddFollowerHandler } from '../../../../tests/unit/handlers/followers.handlers';

describe('Unfollower', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<Unfollower unfollower={userTestResponse} />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('should render successfully', () => {
		component.getByRole('img');
		component.getByText(`${userTestResponse.name} ${userTestResponse.surname}`);
		component.getByText(`@${userTestResponse.username}`);
		component.getByRole('button', { name: 'Follow' });
	});

	it('Should call to api when click on button ', async () => {
		server.use(testAddFollowerHandler);

		const button = component.getByRole('button', { name: 'Follow' });

		fireEvent.click(button);
	});
});
