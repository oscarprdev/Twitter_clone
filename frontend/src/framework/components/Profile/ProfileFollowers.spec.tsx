import { RenderResult, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import ProfileFollowers from './ProfileFollowers';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../tests/shared/responses/users.response';

describe('ProfileFollowers', () => {
	let component: RenderResult;

	afterEach(() => component.unmount());

	describe('Should render proper users', () => {
		it('if the users array is only one', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[userTestResponse]}
						followings={[]}
						kind='following'
					/>
				</Provider>
			);

			const usersItems = component.getAllByRole('profile-user-item');

			expect(usersItems).toHaveLength(1);
		});

		it('if the users array is more than 1', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[userTestResponse, userTestResponse]}
						followings={[]}
						kind='following'
					/>
				</Provider>
			);

			const usersItems = component.getAllByRole('profile-user-item');

			expect(usersItems).toHaveLength(2);
		});
	});

	describe('Followings kind', () => {
		it('Should render "0 followings" if users and followings array are empty', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[]}
						followings={[]}
						kind='following'
					/>
				</Provider>
			);

			component.getByText('0 following');
		});

		it('Should render remove followed button if users and followings are the same', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[userTestResponse]}
						followings={[userTestResponse]}
						kind='following'
					/>
				</Provider>
			);

			component.getByRole('button', { name: 'Unfollow' });
		});
	});

	describe('Followers kind', () => {
		it('Should render "0 followers" if users is empty', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[]}
						followings={[]}
						kind='followers'
					/>
				</Provider>
			);

			component.getByText('0 followers');
		});

		it('Should render remove followed button if users and followings are the same', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[userTestResponse]}
						followings={[userTestResponse]}
						kind='followers'
					/>
				</Provider>
			);

			component.getByRole('button', { name: 'Unfollow' });
		});

		it('Should render add followed button if users and followings are not the same', () => {
			component = render(
				<Provider store={mockStore}>
					<ProfileFollowers
						users={[userTestResponse]}
						followings={[{ ...userTestResponse, id: 'a53706f2-211b-4ac5-a37a-56d9e1481110' }]}
						kind='followers'
					/>
				</Provider>
			);

			component.getByRole('button', { name: 'Follow' });
		});
	});
});
