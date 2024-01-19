import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../../tests/unit/responses/users.response';
import { GetUserAuthPorts } from './get-user-auth.ports';
import { DefaultGetUserAuthUsecase, GetUserAuthUsecase } from './get-user-auth.usecase';

class MockGetUserAuthHttpAdapter implements GetUserAuthPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUserAuth(_input: GetUserAuthPorts.GetUserAuthInput): Promise<GetUserAuthPorts.GetUserAuthOutput> {
		return {
			user: userTestResponse,
		};
	}
}

describe('Get following usecase', () => {
	let usecase: GetUserAuthUsecase;

	let getUserAuthSpy: MockInstance;

	let updateUserLoggedReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const httpAdapter = new MockGetUserAuthHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultGetUserAuthUsecase(httpAdapter, reduxState);

		getUserAuthSpy = vi.spyOn(httpAdapter, 'getUserAuth');

		updateUserLoggedReduxSpy = vi.spyOn(reduxState, 'updateUserLogged');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.getUserAuth({ jwt: '' });

		expect(updateUserLoggedReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http adapter fails', async () => {
		getUserAuthSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.getUserAuth({ jwt: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
