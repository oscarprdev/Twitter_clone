import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { AddFollowPorts } from './add-follow.ports';
import { DefaultAddFollowUsecase } from './add-follow.usecase';
import { userMocked } from '../../../../tests/utils/user.mock';

class MockAddFollowHttpAdapter implements AddFollowPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async addFollow(_input: AddFollowPorts.AddFollowInput): Promise<AddFollowPorts.AddFollowOutput> {
		return {
			user: userMocked,
			followTo: userMocked,
		};
	}
}

describe('Search users usecase', () => {
	let usecase: DefaultAddFollowUsecase;
	let addFollowSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockAddFollowHttpAdapter();
		usecase = new DefaultAddFollowUsecase(mockHttpAdapter);

		addFollowSpy = vi.spyOn(mockHttpAdapter, 'addFollow');
	});

	it('Should return success response', async () => {
		const response = await usecase.addFollow({ userId: '', followTo: '' });

		expect(response.state).toBe('success');
	});

	it('Should return error response if http request fails', async () => {
		addFollowSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.addFollow({ userId: '', followTo: '' });

		expect(response.state).toBe('error');
	});
});
