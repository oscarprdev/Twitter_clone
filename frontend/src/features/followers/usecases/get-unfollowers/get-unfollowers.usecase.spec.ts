import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { GetUnfollowersPorts } from './get-unfollowers.ports';
import { DefaultGetUnfollowersUsecase, GetUnfollowersUsecase } from './get-unfollowers.usecase';
import { userMocked } from '../../../../tests/utils/entities/user.mock';

class MockSearchUsersHttpAdapter implements GetUnfollowersPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUnfollowers(_input: GetUnfollowersPorts.GetUnfollowersInput): Promise<GetUnfollowersPorts.GetUnfollowersOutput> {
		return {
			unfollowers: [userMocked],
			count: 1,
		};
	}
}

describe('Search users usecase', () => {
	let usecase: GetUnfollowersUsecase;
	let getUnfollowersSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockSearchUsersHttpAdapter();
		usecase = new DefaultGetUnfollowersUsecase(mockHttpAdapter);

		getUnfollowersSpy = vi.spyOn(mockHttpAdapter, 'getUnfollowers');
	});

	it('Should return success response', async () => {
		const response = await usecase.getUnfollowers({ userId: '' });

		expect(response.state).toBe('success');
	});

	it('Should return error response if http request fails', async () => {
		getUnfollowersSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getUnfollowers({ userId: '' });

		expect(response.state).toBe('error');
	});
});
