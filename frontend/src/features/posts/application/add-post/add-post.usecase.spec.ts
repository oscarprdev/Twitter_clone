import { beforeEach, describe, it, expect, vi, MockInstance } from 'vitest';
import { AddPostUsecase, DefaultAddPostUsecase } from './add-post.usecase';
import { AddPostPorts } from './add-post.ports';
import { postResponse } from '../../../../tests/unit/responses/posts.response';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../tests/unit/store/store.mock';

class TestAddPostHttpAdapter implements AddPostPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async uploadImage(_input: AddPostPorts.UploadImageInput): Promise<AddPostPorts.UploadImageOutput> {
		return {
			url: '',
		};
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async addPost(_input: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput> {
		return postResponse;
	}
}

describe('Add post usecase', () => {
	let usecase: AddPostUsecase;
	let addPostSpy: MockInstance;
	let uploadImageSpy: MockInstance;

	let addPostReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const ports = new TestAddPostHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultAddPostUsecase(ports, reduxState);

		addPostSpy = vi.spyOn(ports, 'addPost');
		uploadImageSpy = vi.spyOn(ports, 'uploadImage');

		addPostReduxSpy = vi.spyOn(reduxState, 'addPost');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response if input file is null', async () => {
		await usecase.addPost({ post: 'test post', userId: 'user-id', file: null });

		expect(addPostReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should respond as expected if the input file is not null', async () => {
		const mockFile = '' as unknown as File;
		await usecase.addPost({ post: 'test post', userId: 'user-id', file: mockFile });

		expect(addPostReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if addPost method fails', async () => {
		addPostSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.addPost({ post: 'test post', userId: 'user-id', file: null });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if uploadImage method fails', async () => {
		addPostSpy.mockImplementationOnce(() => Promise.reject({}));
		uploadImageSpy.mockImplementationOnce(() => Promise.reject({}));

		const mockFile = '' as unknown as File;

		await usecase.addPost({ post: 'test post', userId: 'user-id', file: mockFile });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
