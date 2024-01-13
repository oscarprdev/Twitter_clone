import { beforeEach, describe, it, expect, vi, MockInstance } from 'vitest';
import { AddPostUsecase, DefaultAddPostUsecase } from './add-post.usecase';
import { AddPostPorts } from './add-post.ports';
import { postMocked } from '../../../../tests/utils/entities/post.mock';

class TestAddPostHttpAdapter implements AddPostPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async addPost(_input: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput> {
		return postMocked;
	}
}

describe('Add post usecase', () => {
	let usecase: AddPostUsecase;
	let addPostSpy: MockInstance;

	beforeEach(() => {
		const ports = new TestAddPostHttpAdapter();
		usecase = new DefaultAddPostUsecase(ports);

		addPostSpy = vi.spyOn(ports, 'addPost');
	});

	it('Should return success response', async () => {
		const response = await usecase.addPost({ post: 'test post', userId: 'user-id' });

		expect(response.state).toBe('success');
	});

	it('Should return error response if addPost method fails', async () => {
		addPostSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.addPost({ post: 'test post', userId: 'user-id' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error creating a post');
		}
	});
});
