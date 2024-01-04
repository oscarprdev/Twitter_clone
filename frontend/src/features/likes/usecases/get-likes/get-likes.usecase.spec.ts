import { SpyInstance, expect, it, vi, describe, beforeEach } from 'vitest';
import { GetLikesPorts } from './get-likes.ports';
import { DefaultGetLikesUsecase, GetLikesUsecase } from './get-likes.usecase';

class TestGetLikesHttpAdapter implements GetLikesPorts {
	async getLikes(input: GetLikesPorts.GetLikesInput): Promise<GetLikesPorts.GetLikesOutput> {
		return {
			post: '',
			postId: input.postId,
			userId: '',
			numLikes: 0,
		};
	}
}

describe('Get likes usecase', () => {
	let usecase: GetLikesUsecase;
	let getLikesSpy: SpyInstance;

	beforeEach(() => {
		const testHttpAdapter = new TestGetLikesHttpAdapter();
		usecase = new DefaultGetLikesUsecase(testHttpAdapter);

		getLikesSpy = vi.spyOn(testHttpAdapter, 'getLikes');
	});

	it('Should return success response', async () => {
		const response = await usecase.getLikes({ postId: '1' });

		expect(response.state).toBe('success');

		if (response.state === 'success') {
			expect(response.likeInfo).toEqual({
				numLikes: 0,
				postId: '1',
				userId: '',
				post: '',
			});
		}
	});

	it('Should return error response if getLikes method fails', async () => {
		getLikesSpy.mockImplementationOnce(() => Promise.reject({}));

		const response = await usecase.getLikes({ postId: '' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error retrieving likes');
		}
	});
});
