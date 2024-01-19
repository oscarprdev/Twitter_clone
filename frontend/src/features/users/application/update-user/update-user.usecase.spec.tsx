import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';
import { userTestResponse } from '../../../../../tests/shared/responses/users.response';
import { UpdateUserPorts } from './update-user.ports';
import { DefaultUpdateUserUsecase, UpdateUserUsecase } from './update-user.usecase';
import { UpdateUserInput } from './update-user.types';

class MockUpdateUserHttpAdapter implements UpdateUserPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async updateUser(_input: UpdateUserPorts.updateUserInput): Promise<UpdateUserPorts.UpdateUserOutput> {
		return {
			user: userTestResponse,
		};
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async uploadImage(_input: UpdateUserPorts.UploadImageInput): Promise<UpdateUserPorts.UploadImageOutput> {
		return {
			url: '',
		};
	}
}

describe('Get following usecase', () => {
	let usecase: UpdateUserUsecase;

	let updateUserSpy: MockInstance;
	let uploadImageSpy: MockInstance;

	let updateUserLoggedReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	const mockInput: UpdateUserInput = {
		name: '',
		surname: '',
		prevImage: '',
		userId: '',
		file: '' as unknown as File,
	};

	beforeEach(() => {
		const httpAdapter = new MockUpdateUserHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultUpdateUserUsecase(httpAdapter, reduxState);

		updateUserSpy = vi.spyOn(httpAdapter, 'updateUser');
		uploadImageSpy = vi.spyOn(httpAdapter, 'uploadImage');

		updateUserLoggedReduxSpy = vi.spyOn(reduxState, 'updateUserLogged');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.updateUser(mockInput);

		expect(updateUserLoggedReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http adapter fails', async () => {
		updateUserSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.updateUser(mockInput);

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if upload image method fails', async () => {
		updateUserSpy.mockImplementationOnce(() => Promise.reject({}));
		uploadImageSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.updateUser(mockInput);

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
