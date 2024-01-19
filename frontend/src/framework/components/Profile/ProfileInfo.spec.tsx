import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, it } from 'vitest';
import ProfileInfo from './ProfileInfo';
import { userTestResponse } from '../../../../tests/shared/responses/users.response';
import { strDateToTime } from '../../utils/strDateToTime';

describe('ProfileInfo', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<ProfileInfo
				profileImgUrl={userTestResponse.profileImgUrl}
				name={userTestResponse.name}
				surname={userTestResponse.surname}
				username={userTestResponse.username}
				createdAt={userTestResponse.createdAt}
				followersCount={1}
				followingCount={2}
			/>
		);
	});

	afterEach(() => component.unmount());

	it('Should render properly', () => {
		component.getByAltText('Profile user image');
		component.getByText(`${userTestResponse.name} ${userTestResponse.surname}`);
		component.getByText(`@${userTestResponse.username}`);
		component.getByText(`Joined ${strDateToTime(userTestResponse.createdAt)} ago`);

		component.getByRole('followers-counter');
		component.getByRole('followings-counter');
	});
});
