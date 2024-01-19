import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import SearchContainer from './SearchContainer';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { server } from '../../../../tests/unit/server/server.mock';
import { userTestResponse } from '../../../../tests/shared/responses/users.response';
import { testSearchMockUserEmptyHandler, testSearchMockUserHandler } from '../../../../tests/unit/handlers/users.handlers';

describe('SearchContainer', () => {
	let component: RenderResult;

	beforeAll(() => server.listen());
	afterAll(() => server.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<SearchContainer />
			</Provider>
		);
	});

	afterEach(() => {
		server.resetHandlers();
		component.unmount();
	});

	it('should render successfully', () => {
		component.getByPlaceholderText('Search');
		component.getByRole('search-icon');
	});

	it('Should appear close-icon when onFocus event is fired', async () => {
		server.use(testSearchMockUserHandler);

		const input = component.getByPlaceholderText('Search');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'asd' } });

		await waitFor(() => {
			component.getByRole('close-icon');
		});
	});

	it('Should appear an user when the input value matches with some user on database', async () => {
		server.use(testSearchMockUserHandler);

		const searchedValue = 'mock';
		const input = component.getByPlaceholderText('Search');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: searchedValue } });

		await waitFor(() => {
			component.getByText(`${userTestResponse.name} ${userTestResponse.surname}`);
		});
	});

	it('Should appear a text if no users are founded', async () => {
		server.use(testSearchMockUserEmptyHandler);

		const searchedValue = 'mock';
		const input = component.getByPlaceholderText('Search');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: searchedValue } });

		await waitFor(() => {
			component.getByText('Try with another name...');
		});
	});
});
