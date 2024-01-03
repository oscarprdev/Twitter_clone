import { beforeEach, describe, it, expect, SpyInstance, vi } from 'vitest';
import { AddPostUsecase, DefaultAddPostUsecase } from './add-post.usecase';
import { AddPostPort } from './add-post.port';

class TestAddPostHttpAdapter implements AddPostPort {
	async addPost({ post, userId }: AddPostPort.AddPostInput): Promise<AddPostPort.AddPostOutput> {
		return {
			updatedAt: '',
			userId,
			post,
		};
	}

	// eslint-disable-next-line no-empty-pattern
	async getUser({}: AddPostPort.GetUserInput): Promise<AddPostPort.GetUserOutput> {
		return {
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
		const port = new TestAddPostHttpAdapter();
		usecase = new DefaultAddPostUsecase(port);

		addPostSpy = vi.spyOn(port, 'addPost');
		getUserSpy = vi.spyOn(port, 'getUser');
	});

	it('Should return success response', async () => {
		const response = await usecase.addPost({ post: 'test post', userId: 'user-id' });

		if (response.state === 'success') {
			expect(response.post).toEqual({
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
