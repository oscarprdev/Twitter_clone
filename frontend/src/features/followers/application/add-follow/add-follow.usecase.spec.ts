import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { AddFollowPorts } from './add-follow.ports';
import { DefaultAddFollowUsecase } from './add-follow.usecase';
import { userTestResponse } from '../../../../tests/unit/responses/users.response';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../tests/unit/store/store.mock';

class MockAddFollowHttpAdapter implements AddFollowPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async addFollow(_input: AddFollowPorts.AddFollowInput): Promise<AddFollowPorts.AddFollowOutput> {
		return {
			user: userTestResponse,
			followTo: userTestResponse,
		};
	}
}

describe('Search users usecase', () => {
	let usecase: DefaultAddFollowUsecase;
	let addFollowAdapterSpy: MockInstance;
	let addFollowReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockAddFollowHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultAddFollowUsecase(mockHttpAdapter, reduxState);

		addFollowAdapterSpy = vi.spyOn(mockHttpAdapter, 'addFollow');
		addFollowReduxSpy = vi.spyOn(reduxState, 'addFollow');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.addFollow({ userId: '', followTo: '' });

		expect(addFollowReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http request fails', async () => {
		addFollowAdapterSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.addFollow({ userId: '', followTo: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
