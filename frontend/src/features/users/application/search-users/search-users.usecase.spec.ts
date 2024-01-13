import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultSearchUsersUsecase, SearchUsersUsecase } from './search-users.usecase';
import { SearchUsersPorts } from './search-users.ports';

class MockSearchUsersHttpAdapter implements SearchUsersPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUsersBySearch(_input: SearchUsersPorts.GetUsersBySearchInput): Promise<SearchUsersPorts.GetUsersBySearchOutput> {
		return {
			users: [
				{
					id: 'mocked-id',
					createdAt: '2024-01-10T11:29:27.134295Z',
					updatedAt: '2024-01-10T11:29:27.134295Z',
					name: 'mocked-name',
					surname: 'mocked-surname',
					username: 'mocked-username',
					email: 'mocked-email',
					profileImgUrl: '',
					profileBgImgUrl: '',
				},
			],
		};
	}
}

describe('Search users usecase', () => {
	let usecase: SearchUsersUsecase;
	let getUsersBySearchSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockSearchUsersHttpAdapter();
		usecase = new DefaultSearchUsersUsecase(mockHttpAdapter);

		getUsersBySearchSpy = vi.spyOn(mockHttpAdapter, 'getUsersBySearch');
	});

	it('Should return success response', async () => {
		const response = await usecase.getUsersBySearch({ searchValue: '' });

		expect(response.state).toBe('success');
	});

	it('Should return error response if http request fails', async () => {
		getUsersBySearchSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getUsersBySearch({ searchValue: '' });

		expect(response.state).toBe('error');
	});
});
