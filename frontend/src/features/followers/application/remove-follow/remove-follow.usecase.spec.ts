import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { RemoveFollowPorts } from './remove-follow.ports';
import { DefaultRemoveFollowUsecase, RemoveFollowUsecase } from './remove-follow.usecase';
import { userTestResponse } from '../../../../../tests/shared/responses/users.response';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';

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

	let removeFollowReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const httpAdapter = new MockRemoveFollowHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultRemoveFollowUsecase(httpAdapter, reduxState);

		removeFollowSpy = vi.spyOn(httpAdapter, 'removeFollow');

		removeFollowReduxSpy = vi.spyOn(reduxState, 'removeFollow');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.removeFollow({ userId: '', unfollowTo: '' });

		expect(removeFollowReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http adapter fails', async () => {
		removeFollowSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.removeFollow({ userId: '', unfollowTo: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
