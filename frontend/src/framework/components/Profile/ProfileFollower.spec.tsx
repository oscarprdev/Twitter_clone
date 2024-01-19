import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import ProfileFollower from './ProfileFollower';
import { userTestResponse } from '../../../../tests/unit/responses/users.response';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';

describe('ProfileFollower', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<ProfileFollower
					profileImgUrl={userTestResponse.profileImgUrl}
					name={userTestResponse.name}
					surname={userTestResponse.surname}
					username={userTestResponse.username}
					followings={[userTestResponse]}
					userId={userTestResponse.id}
				/>
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('Should render as expected', () => {
		component.getByRole('profile-user-item');
		const image = component.getByAltText('Profile image');

		expect(image.getAttribute('src')).toBe(userTestResponse.profileImgUrl);

		component.getByText(`${userTestResponse.name} ${userTestResponse.surname}`);
		component.getByText(`@${userTestResponse.username}`);
	});

	it('Should have Unfollow button if followings prop is not empty', () => {
		component.getByRole('button', { name: 'Unfollow' });
	});

	it('Should have Follow button if followings prop is empty', () => {
		component = render(
			<Provider store={mockStore}>
				<ProfileFollower
					profileImgUrl={userTestResponse.profileImgUrl}
					name={userTestResponse.name}
					surname={userTestResponse.surname}
					username={userTestResponse.username}
					followings={[]} // Empty array of followings users
					userId={userTestResponse.id}
				/>
			</Provider>
		);

		component.getByRole('button', { name: 'Unfollow' });
	});
});
