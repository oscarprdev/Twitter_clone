import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { userTestResponse } from '../../../../../tests/shared/responses/users.response';
import { GetUserPorts } from './get-user.ports';
import { DefaultGetUserUsecase, GetUserUsecase } from './get-user.usecase';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';

class MockGetUserHttpAdapter implements GetUserPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUser(_input: GetUserPorts.GetUserInput): Promise<GetUserPorts.GetUserOutput> {
		return {
			user: userTestResponse,
		};
	}
}

describe('Search users usecase', () => {
	let usecase: GetUserUsecase;
	let getAllUsersSpy: MockInstance;

	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockGetUserHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultGetUserUsecase(mockHttpAdapter, reduxState);

		getAllUsersSpy = vi.spyOn(mockHttpAdapter, 'getUser');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		const response = await usecase.getUser({ userId: '' });

		expect(response.user).toBeTruthy();
	});

	it('Should return error response if http request fails', async () => {
		getAllUsersSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.getUser({ userId: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
