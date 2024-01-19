import { DbUser, User } from '../../../src/features/shared/domain/types/user';

export const userTestResponse: User = {
	id: 'a53706f2-211b-4ac5-a37a-56d9e1481185',
	createdAt: '2024-01-10T19:14:04.489431Z',
	updatedAt: '2024-01-10T19:14:04.489431Z',
	name: 'mocked-name',
	surname: 'mocked-surname',
	username: 'mocked-username',
	email: 'mocked-email',
	profileImgUrl: '',
	profileBgImgUrl: '',
};

export const userLoggedTestResponse: User = {
	id: 'a53706f2-211b-4ac5-a37a-56d9e1481185',
	createdAt: '2024-01-10T19:14:04.489431Z',
	updatedAt: '2024-01-10T19:14:04.489431Z',
	name: 'mocked-name',
	surname: 'mocked-surname',
	username: 'mocked-username',
	email: 'mocked-email',
	profileImgUrl: '',
	profileBgImgUrl: '',
};

export const userDbTestResponse: DbUser = {
	id: 'a53706f2-211b-4ac5-a37a-56d9e1481185',
	created_at: '2024-01-10T18:35:30.728283Z',
	updated_at: '2024-01-10T18:35:30.728283Z',
	name: 'mocked-name',
	surname: 'mocked-surname',
	username: 'mocked-username',
	email: 'mocked-email',
	profileImgUrl: '',
	profileBgImgUrl: '',
};
