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
		};
	}

	// eslint-disable-next-line no-empty-pattern
	async getUser({}: AddPostPorts.GetUserInput): Promise<AddPostPorts.GetUserOutput> {
		return {
			id: '1',
			updatedAt: '',
			name: 'test-name',
			surname: 'test-surname',
			username: 'test-username',
			email: 'test-email',
			profileImgUrl: 'test-profile-img',
		};
	}
}

describe('Add post usecase', () => {
	let usecase: AddPostUsecase;
	let addPostSpy: SpyInstance;
	let getUserSpy: SpyInstance;

	beforeEach(() => {
		const ports = new TestAddPostHttpAdapter();
		usecase = new DefaultAddPostUsecase(ports);

		addPostSpy = vi.spyOn(ports, 'addPost');
		getUserSpy = vi.spyOn(ports, 'getUser');
	});

	it('Should return success response', async () => {
		const response = await usecase.addPost({ post: 'test post', userId: 'user-id' });

		if (response.state === 'success') {
			expect(response.post).toEqual({
				id: '1',
				userId: 'user-id',
				post: 'test post',
				updatedAt: '',
				name: 'test-name',
				surname: 'test-surname',
				username: 'test-username',
				email: 'test-email',
				profileImgUrl: 'test-profile-img',
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

	it('Should return error response if getUser method fails', async () => {
		getUserSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.addPost({ post: 'test post', userId: 'user-id' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error creating a post');
		}
	});
});
