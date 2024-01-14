import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import ProfileFollower from './ProfileFollower';
import { userTestResponse } from '../../../tests/unit/responses/users.response';

describe('ProfileFollower', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<ProfileFollower
				profileImgUrl={userTestResponse.profileImgUrl}
				name={userTestResponse.name}
				surname={userTestResponse.surname}
				username={userTestResponse.username}>
				<button>children mocked</button>
			</ProfileFollower>
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

	it('Should have a children component', () => {
		expect(component.container.children).toBeTruthy();
	});
});
