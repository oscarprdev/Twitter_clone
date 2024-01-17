import { RenderResult, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import SearchedUsersList from './SearchedUsersList';
import { userTestResponse } from '../../../tests/unit/responses/users.response';

describe('SearchedUsersList', () => {
	let component: RenderResult;

	it('should render users if there are users searched ', () => {
		component = render(<SearchedUsersList searchedUsers={[userTestResponse]} />);

		component.getByText('Users:');
		component.getByAltText('Profile image');
		component.getByText(`${userTestResponse.name} ${userTestResponse.surname}`);
		component.getByText(`@${userTestResponse.username}`);

		component.unmount();
	});

	it('Should not render users if there are not users searched', () => {
		component = render(<SearchedUsersList searchedUsers={[]} />);

		component.getByText('Try with another name...');

		component.unmount();
	});
});
