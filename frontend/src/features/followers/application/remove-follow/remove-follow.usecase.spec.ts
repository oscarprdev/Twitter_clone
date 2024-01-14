import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { RemoveFollowPorts } from './remove-follow.ports';
import { DefaultRemoveFollowUsecase, RemoveFollowUsecase } from './remove-follow.usecase';
import { userTestResponse } from '../../../../tests/unit/responses/users.response';

class MockRemoveFollowHttpAdapter implements RemoveFollowPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async removeFollow(_input: RemoveFollowPorts.RemoveFollowInput): Promise<RemoveFollowPorts.RemoveFollowOutput> {
		return {
			user: userTestResponse,
			unfollowToUser: userTestResponse,
		};
	}
}

describe('Get following usecase', () => {
	let usecase: RemoveFollowUsecase;
	let removeFollowSpy: MockInstance;

	beforeEach(() => {
		const httpAdapter = new MockRemoveFollowHttpAdapter();
		usecase = new DefaultRemoveFollowUsecase(httpAdapter);

		removeFollowSpy = vi.spyOn(httpAdapter, 'removeFollow');
	});

	it('Should return success response', async () => {
		const response = await usecase.removeFollow({ userId: '', unfollowTo: '' });

		expect(response.state).toBe('success');

		if (response.state === 'success') {
			expect(response.user).toBeTruthy();
			expect(response.unfollowToUser).toBeTruthy();
		}
	});

	it('Should return error response if http adapter fails', async () => {
		removeFollowSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.removeFollow({ userId: '', unfollowTo: '' });

		expect(response.state).toBe('error');
	});
});
