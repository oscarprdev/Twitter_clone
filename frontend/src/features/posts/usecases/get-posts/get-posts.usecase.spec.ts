import { SpyInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { GetPostsPorts } from './get-posts.ports';
import { DefaultGetPostsUsecase, GetPostsUsecase } from './get-posts.usecase';

class TestGetPostsHttpAdapter implements GetPostsPorts {
	async getPosts(): Promise<GetPostsPorts.GetPostsOutput> {
		return {
			posts: [
				{
					updatedAt: '',
					userId: 'mocket-userid',
					post: 'mocked-post',
				},
			],
		};
	}

	// eslint-disable-next-line no-empty-pattern
	async getUser({}: GetPostsPorts.GetUserInput): Promise<GetPostsPorts.GetUserOutput> {
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

describe('Get posts usecase', () => {
	let usecase: GetPostsUsecase;

	let getPostsSpy: SpyInstance;
	let getUserSpy: SpyInstance;

	beforeEach(() => {
		const ports = new TestGetPostsHttpAdapter();
		usecase = new DefaultGetPostsUsecase(ports);

		getPostsSpy = vi.spyOn(ports, 'getPosts');
		getUserSpy = vi.spyOn(ports, 'getUser');
	});

	it('Should return success response', async () => {
		const response = await usecase.getPosts();

		expect(response.state).toBe('success');

		if (response.state === 'success') {
			expect(response.posts).toEqual([
				{
					post: 'mocked-post',
					updatedAt: '',
					name: 'test-name',
					surname: 'test-surname',
					username: 'test-username',
					email: 'test-email',
					profileImgUrl: 'test-profile-img',
				},
			]);
		}
	});

	it('Should return error response if getPosts method fails', async () => {
		getPostsSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getPosts();

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error listing all posts');
		}
	});

	it('Should return error response if getUser method fails', async () => {
		getUserSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getPosts();

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error listing all posts');
		}
	});
});
