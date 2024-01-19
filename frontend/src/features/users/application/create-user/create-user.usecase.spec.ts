import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';
import { CreateUserUsecase, DefaultCreateUserUsecase } from './create-user.usecase';
import { CreateUserPorts } from './create-user.ports';
import { CreateUserInput } from './create-user.types';
import { userTestResponse } from '../../../../../tests/shared/responses/users.response';

class MockCreateUserHttpAdapter implements CreateUserPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async createUser(_input: CreateUserPorts.CreateUserInput): Promise<CreateUserPorts.CreateUserOutput> {
		return {
			user: userTestResponse,
		};
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async uploadImage(_input: CreateUserPorts.UploadImageInput): Promise<CreateUserPorts.UploadImageOutput> {
		return {
			url: '',
		};
	}
}

describe('Get following usecase', () => {
	let usecase: CreateUserUsecase;

	let createUserSpy: MockInstance;
	let uploadImageSpy: MockInstance;

	let addUserReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	const mockInput: CreateUserInput = {
		name: '',
		surname: '',
		email: '',
		username: '',
		password: '',
		prevImage: '',
		file: '' as unknown as File,
	};

	beforeEach(() => {
		const httpAdapter = new MockCreateUserHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultCreateUserUsecase(httpAdapter, reduxState);

		createUserSpy = vi.spyOn(httpAdapter, 'createUser');
		uploadImageSpy = vi.spyOn(httpAdapter, 'uploadImage');

		addUserReduxSpy = vi.spyOn(reduxState, 'addUser');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.createUser(mockInput);

		expect(addUserReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http adapter fails', async () => {
		createUserSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.createUser(mockInput);

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if upload image method fails', async () => {
		createUserSpy.mockImplementationOnce(() => Promise.reject({}));
		uploadImageSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.createUser(mockInput);

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
