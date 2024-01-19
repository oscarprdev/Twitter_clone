import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultSearchUsersUsecase, SearchUsersUsecase } from './search-users.usecase';
import { SearchUsersPorts } from './search-users.ports';
import { userTestResponse } from '../../../../../tests/unit/responses/users.response';

class MockSearchUsersHttpAdapter implements SearchUsersPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUsersBySearch(_input: SearchUsersPorts.GetUsersBySearchInput): Promise<SearchUsersPorts.GetUsersBySearchOutput> {
		return {
			users: [userTestResponse],
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
