import { RenderResult, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import SearchedUsersList from './SearchedUsersList';
import { userMocked } from '../../tests/utils/user.mock';

describe('SearchedUsersList', () => {
	let component: RenderResult;

	it('should render users if there are users searched ', () => {
		component = render(<SearchedUsersList searchedUsers={[userMocked]} />);

		component.getByText('Users:');
		component.getByAltText('Profile image');
		component.getByText(`${userMocked.name} ${userMocked.surname}`);
		component.getByText(`@${userMocked.username}`);

		component.unmount();
	});

	it('Should not render users if there are not users searched', () => {
		component = render(<SearchedUsersList searchedUsers={[]} />);

		component.getByText('Try with another name...');

		component.unmount();
	});
});
