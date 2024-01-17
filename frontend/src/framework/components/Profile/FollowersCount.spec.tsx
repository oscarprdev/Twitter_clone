import { RenderResult, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import FollowersCount from './FollowersCount';

describe('FollowersCount', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<FollowersCount
				followersCount={0}
				followingCount={0}
			/>
		);
	});

	afterEach(() => component.unmount());

	it('Should render as expected', () => {
		const followers = component.getByRole('followers-counter');
		const followersHtml = followers.innerHTML;

		expect(followersHtml).toContain('0');
		expect(followersHtml).toContain('followers');

		const followings = component.getByRole('followings-counter');
		const followingsHtml = followings.innerHTML;

		expect(followingsHtml).toContain('0');
		expect(followingsHtml).toContain('following');
	});
});
