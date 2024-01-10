import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { ToggleLikePorts } from './toggle-like.ports';
import { DefaultToggleLikeUsecase, ToggleLikeUsecase } from './toggle-like.usecase';

class TestToggleLikeHttpAdapter implements ToggleLikePorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async toggleLike(_: ToggleLikePorts.ToggleLikeInput): Promise<ToggleLikePorts.ToggleLikeOutput> {
		return { isLikeDeleted: true, numLikes: 10 };
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUsersLikesFromPost(_input: ToggleLikePorts.GetUsersLikesFromPostInput): Promise<ToggleLikePorts.GetUsersLikesFromPostOutput> {
		return {
			usersIds: ['1'],
		};
	}
}

describe('Toggle like usecase', () => {
	let usecase: ToggleLikeUsecase;

	let toggleLikeSpy: MockInstance;

	beforeEach(() => {
		const testHttpAdapter = new TestToggleLikeHttpAdapter();
		usecase = new DefaultToggleLikeUsecase(testHttpAdapter);

		toggleLikeSpy = vi.spyOn(testHttpAdapter, 'toggleLike');
	});

	it('Should return success reponse', async () => {
		const response = await usecase.toggleLike({ userId: '1', postId: '2' });

		if (response.state === 'success') {
			expect(response.state).toBe('success');
			expect(response.isLikeDeleted).toBeTruthy();
			expect(response.numLikes).toBeTypeOf('number');
		}
	});

	it('Should display an error if addLike method fails', async () => {
		toggleLikeSpy.mockImplementation(() => Promise.reject({}));

		const response = await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error toggling like');
		}
	});
});
