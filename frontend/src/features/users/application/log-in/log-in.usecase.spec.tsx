import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../../tests/unit/responses/users.response';
import { LogInPorts } from './log-in.ports';
import { DefaultLogInUsecase, LogInUsecase } from './log-in.usecase';

class MockLogInHttpAdapter implements LogInPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async logIn(_input: LogInPorts.LogInInput): Promise<LogInPorts.LogInOutput> {
		return {
			userLogged: userTestResponse,
			jwt: '',
		};
	}
}

describe('LogIn usecase', () => {
	let usecase: LogInUsecase;

	let logInSpy: MockInstance;

	let updateUserLoggedReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const httpAdapter = new MockLogInHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultLogInUsecase(httpAdapter, reduxState);

		logInSpy = vi.spyOn(httpAdapter, 'logIn');

		updateUserLoggedReduxSpy = vi.spyOn(reduxState, 'updateUserLogged');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.logIn({ email: '', password: '' });

		expect(updateUserLoggedReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http adapter fails', async () => {
		logInSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.logIn({ email: '', password: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
