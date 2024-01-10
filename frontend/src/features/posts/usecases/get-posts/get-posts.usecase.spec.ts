import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { GetPostsPorts } from './get-posts.ports';
import { DefaultGetPostsUsecase, GetPostsUsecase } from './get-posts.usecase';

class TestGetPostsHttpAdapter implements GetPostsPorts {
	async getPosts(): Promise<GetPostsPorts.GetPostsOutput> {
		return {
			posts: [
				{
					id: '1',
					updatedAt: '',
					userId: 'mocket-userid',
					post: 'mocked-post',
					owner: {
						username: 'username',
						name: 'name',
						surname: 'surname',
						profileImgUrl: '',
						email: 'email',
					},
				},
			],
		};
	}
}

describe('Get posts usecase', () => {
	let usecase: GetPostsUsecase;
	let getPostsSpy: MockInstance;

	beforeEach(() => {
		const ports = new TestGetPostsHttpAdapter();
		usecase = new DefaultGetPostsUsecase(ports);

		getPostsSpy = vi.spyOn(ports, 'getPosts');
	});

	it('Should return success response', async () => {
		const response = await usecase.getPosts();

		expect(response.state).toBe('success');

		if (response.state === 'success') {
			expect(response.posts).toEqual([
				{
					id: '1',
					userId: '1',
					post: 'mocked-post',
					updatedAt: '',
					owner: {
						username: 'username',
						name: 'name',
						surname: 'surname',
						profileImgUrl: '',
						email: 'email',
					},
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
});
