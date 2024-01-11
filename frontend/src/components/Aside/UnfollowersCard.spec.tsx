import { RenderResult, render } from '@testing-library/react';
import UnfollowersCard from './UnfollowersCard';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PostSlice } from '../../store/slices/posts-slice';
import { Provider } from 'react-redux';
import { getUserLoggedReducer } from '../../store/reducers/users/get-user-logged/get-user-logged.reducer';
import { UsersSliceState } from '../../store/slices/users-slice';

const initialState: UsersSliceState = {
	userLogged: {
		id: '10cf35c4-adab-4057-b41b-6f55d0d0af7d',
		createdAt: '2024-01-10T11:29:27.134295Z',
		updatedAt: '2024-01-10T11:29:27.134295Z',
		name: 'Oscar',
		surname: 'Perez',
		username: 'oscarpr',
		email: 'oscarperez@email.com',
		profileImgUrl: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/personal-image.jpeg',
		profileBgImgUrl: '',
	},
	unfollowers: [
		{
			id: '1a26b3e6-1e2a-497a-9155-009968e8efc5',
			createdAt: '2024-01-10T18:35:30.728283Z',
			updatedAt: '2024-01-10T18:35:30.728283Z',
			name: 'Zaida',
			surname: 'Pintado',
			username: 'zaidapf',
			email: 'zaidapintado@email.com',
			profileImgUrl: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/woman-random.avif',
			profileBgImgUrl: '',
		},
	],
};

const MockUsersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUserLogged: getUserLoggedReducer,
	},
});

const mockStore = configureStore({
	reducer: {
		posts: PostSlice.reducer,
		users: MockUsersSlice.reducer,
	},
});

describe('UnfollowersCard', () => {
	let component: RenderResult;

	beforeEach(() => {
		component = render(
			<Provider store={mockStore}>
				<UnfollowersCard />
			</Provider>
		);
	});

	afterEach(() => component.unmount());

	it('should render successfully', () => {
		component.getByText('Who to follow');
		component.getByRole('button', { name: 'Follow' });
	});
});
