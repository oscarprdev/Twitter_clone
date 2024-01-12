import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from 'vitest';
import SearchContainer from './SearchContainer';
import { mockSearchUser, serverMocked } from '../../tests/utils/server/server.mock';
import { mockStore } from '../../tests/utils/store/store.mock';
import { userMocked } from '../../tests/utils/user.mock';

describe('SearchContainer', () => {
	let component: RenderResult;

	beforeAll(() => serverMocked.listen());
	afterAll(() => serverMocked.close());

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<SearchContainer />
			</Provider>
		);
	});

	afterEach(() => {
		serverMocked.resetHandlers();
		component.unmount();
	});

	it('should render successfully', () => {
		component.getByPlaceholderText('Search');
		component.getByRole('search-icon');
	});

	it('Should appear close-icon when onFocus event is fired', async () => {
		const input = component.getByPlaceholderText('Search');

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'asd' } });

		await waitFor(() => {
			component.getByRole('close-icon');
		});
	});

	it('Should appear an user when the input value matches with some user on database', async () => {
		const searchedValue = 'mock';
		const input = component.getByPlaceholderText('Search');

		serverMocked.use(mockSearchUser());

		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: searchedValue } });

		await waitFor(() => {
			component.getByText(`${userMocked.name} ${userMocked.surname}`);
		});
	});
});
