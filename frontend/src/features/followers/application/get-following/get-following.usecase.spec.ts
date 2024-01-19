import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultGetFollowingUsecase, GetFollowingUsecase } from './get-following.usecase';
import { GetFollowingPorts, GetFollowingPortsInput, GetFollowingPortsOutput } from './get-followers.ports';
import { userTestResponse } from '../../../../../tests/unit/responses/users.response';

class MockGetFollowingHttpAdapter implements GetFollowingPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getFollowing(_input: GetFollowingPortsInput): Promise<GetFollowingPortsOutput> {
		return {
			following: [userTestResponse],
			count: 0,
		};
	}
}

describe('Get following usecase', () => {
	let usecase: GetFollowingUsecase;
	let getFollowingSpy: MockInstance;

	beforeEach(() => {
		const httpAdapter = new MockGetFollowingHttpAdapter();
		usecase = new DefaultGetFollowingUsecase(httpAdapter);

		getFollowingSpy = vi.spyOn(httpAdapter, 'getFollowing');
	});

	it('Should return success response', async () => {
		const response = await usecase.getFollowing({ userId: 'mocked-id' });

		expect(response.state).toBe('success');

		if (response.state === 'success') {
			expect(response.count).not.toBeNull();
			expect(response.following).toBeTruthy();
		}
	});

	it('Should return error response if http adapter fails', async () => {
		getFollowingSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getFollowing({ userId: '' });

		expect(response.state).toBe('error');
	});
});
