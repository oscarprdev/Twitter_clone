import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { userTestResponse } from '../../../../../tests/shared/responses/users.response';
import { DefaultGetAllUsersUsecase, GetAllUsersUsecase } from './get-all-users.usecase';
import { GetAllUsersPorts } from './get-all-users.port';

class MockGetAllUsersHttpAdapter implements GetAllUsersPorts {
	async getAllUsers(): Promise<GetAllUsersPorts.GetAllUsersOutput> {
		return {
			users: [userTestResponse],
		};
	}
}

describe('Search users usecase', () => {
	let usecase: GetAllUsersUsecase;
	let getAllUsersSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockGetAllUsersHttpAdapter();
		usecase = new DefaultGetAllUsersUsecase(mockHttpAdapter);

		getAllUsersSpy = vi.spyOn(mockHttpAdapter, 'getAllUsers');
	});

	it('Should return success response', async () => {
		const response = await usecase.getAllUsers();

		expect(response.state).toBe('success');
	});

	it('Should return error response if http request fails', async () => {
		getAllUsersSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getAllUsers();

		expect(response.state).toBe('error');
	});
});
