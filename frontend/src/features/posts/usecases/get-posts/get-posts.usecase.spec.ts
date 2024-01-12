import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { GetPostsPorts } from './get-posts.ports';
import { DefaultGetPostsUsecase, GetPostsUsecase } from './get-posts.usecase';
import { postMocked } from '../../../../tests/utils/post.mock';

class TestGetPostsHttpAdapter implements GetPostsPorts {
	async getPosts(): Promise<GetPostsPorts.GetPostsOutput> {
		return {
			posts: [postMocked],
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
			expect(response.posts).toBeTruthy();
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
