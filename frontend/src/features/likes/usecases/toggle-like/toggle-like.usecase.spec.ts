import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { ToggleLikePorts } from './toggle-like.ports';
import { DefaultToggleLikeUsecase, ToggleLikeUsecase } from './toggle-like.usecase';

class TestToggleLikeHttpAdapter implements ToggleLikePorts {
	async addLike({ userId, postId }: ToggleLikePorts.AddLikeInput): Promise<ToggleLikePorts.AddLikeOutput> {
		return { userId, postId };
	}

	async deleteLike({ userId, postId }: ToggleLikePorts.DeleteLikeInput): Promise<ToggleLikePorts.DeleteLikeOutput> {
		return { userId, postId };
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

	let addLikeSpy: MockInstance;
	let deleteLikeSpy: MockInstance;
	let getUsersLikesFromPostSpy: MockInstance;

	let isUserAlreadyLikedSpy: MockInstance;

	beforeEach(() => {
		const testHttpAdapter = new TestToggleLikeHttpAdapter();
		usecase = new DefaultToggleLikeUsecase(testHttpAdapter);

		addLikeSpy = vi.spyOn(testHttpAdapter, 'addLike');
		deleteLikeSpy = vi.spyOn(testHttpAdapter, 'deleteLike');
		getUsersLikesFromPostSpy = vi.spyOn(testHttpAdapter, 'getUsersLikesFromPost');

		isUserAlreadyLikedSpy = vi.spyOn(usecase, 'isUserAlreadyLiked');
	});

	it('Should return success reponse', async () => {
		const response = await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(response.state).toBe('success');
	});

	it('Should addLike method be called if user is not already liked', async () => {
		isUserAlreadyLikedSpy.mockImplementation(() => false);

		await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(addLikeSpy).toHaveBeenCalledOnce();
	});

	it('Should deleteLike method be called if is user is already liked', async () => {
		isUserAlreadyLikedSpy.mockImplementation(() => true);

		await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(deleteLikeSpy).toHaveBeenCalledOnce();
	});

	it('Should display an error if addLike method fails', async () => {
		addLikeSpy.mockImplementation(() => Promise.reject({}));
		isUserAlreadyLikedSpy.mockImplementation(() => false);

		const response = await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error toggling like');
		}
	});

	it('Should display an error if deleteLike method fails', async () => {
		deleteLikeSpy.mockImplementation(() => Promise.reject({}));
		isUserAlreadyLikedSpy.mockImplementation(() => true);

		const response = await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error toggling like');
		}
	});

	it('Should display an error if getUsersLikesFromPost method fails', async () => {
		getUsersLikesFromPostSpy.mockImplementation(() => Promise.reject({}));

		const response = await usecase.toggleLike({ userId: '1', postId: '2' });

		expect(response.state).toBe('error');

		if (response.state === 'error') {
			expect(response.error).toContain('Error toggling like');
		}
	});
});
