import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultGetFollowersUsecase, GetFollowersUsecase } from './get-followers.usecase';
import { GetFollowersPorts, GetFollowersPortsInput, GetFollowersPortsOutput } from './get-followers.ports';
import { userTestResponse } from '../../../../tests/unit/responses/users.response';

class MockGetFollowersHttpAdapter implements GetFollowersPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getFollowers(_input: GetFollowersPortsInput): Promise<GetFollowersPortsOutput> {
		return {
			followers: [userTestResponse],
			count: 0,
		};
	}
}

describe('Get followers usecase', () => {
	let usecase: GetFollowersUsecase;
	let getFollowersSpy: MockInstance;

	beforeEach(() => {
		const httpAdapter = new MockGetFollowersHttpAdapter();
		usecase = new DefaultGetFollowersUsecase(httpAdapter);

		getFollowersSpy = vi.spyOn(httpAdapter, 'getFollowers');
	});

	it('Should return success response', async () => {
		const response = await usecase.getFollowers({ userId: 'mocked-id' });

		expect(response.state).toBe('success');

		if (response.state === 'success') {
			expect(response.count).not.toBeNull();
			expect(response.followers).toBeTruthy();
		}
	});

	it('Should return error response if http adapter fails', async () => {
		getFollowersSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getFollowers({ userId: '' });

		expect(response.state).toBe('error');
	});
});
