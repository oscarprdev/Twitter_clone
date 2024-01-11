import { beforeEach, describe, it, expect, SpyInstance, vi } from 'vitest';
import { AddPostUsecase, DefaultAddPostUsecase } from './add-post.usecase';
import { AddPostPorts } from './add-post.ports';

class TestAddPostHttpAdapter implements AddPostPorts {
	async addPost({ post, userId }: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput> {
		return {
			id: '1',
			updatedAt: '',
			userId,
			post,
			owner: {
				username: 'username',
				name: 'name',
				surname: 'surname',
				profileImgUrl: '',
				email: 'email',
			},
		};
	}
}

describe('Add post usecase', () => {
	let usecase: AddPostUsecase;
	let addPostSpy: SpyInstance;

	beforeEach(() => {
		const ports = new TestAddPostHttpAdapter();
		usecase = new DefaultAddPostUsecase(ports);

		addPostSpy = vi.spyOn(ports, 'addPost');
	});

	it('Should return success response', async () => {
		const response = await usecase.addPost({ post: 'test post', userId: 'user-id' });

		if (response.state === 'success') {
			expect(response.post).toEqual({
				id: '1',
				userId: 'user-id',
				post: 'test post',
				updatedAt: '',
				owner: {
					username: 'username',
					name: 'name',
					surname: 'surname',
					profileImgUrl: '',
					email: 'email',
				},
			});
		}
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
