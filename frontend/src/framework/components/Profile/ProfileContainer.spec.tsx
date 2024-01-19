import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, it } from 'vitest';
import ProfileContainer from './ProfileContainer';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../tests/shared/responses/users.response';

describe('ProfileContainer', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<ProfileContainer user={userTestResponse} />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('Should render as expected', () => {
		component.getByRole('heading');
		component.getByRole('followers-counter');
		component.getByRole('followings-counter');
		component.getByRole('profile-nav');
		component.getByAltText('Profile user image');

		component.getByText('Posts');
		component.getByText('Followers');
		component.getByText('Following');
	});
});
