import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { postResponse } from '../../../../tests/unit/responses/posts.response';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../tests/unit/store/store.mock';
import { GetPostsByUserPorts } from './get-posts-by-user.ports';
import { DefaultGetPostsByUserUsecase, GetPostsByUserUsecase } from './get-posts-by-user.usecase';

class TestGetPostsHttpAdapter implements GetPostsByUserPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getPostsByUser(_input: GetPostsByUserPorts.GetPostsByUserInput): Promise<GetPostsByUserPorts.GetPostsByUserOutput> {
		return {
			posts: [postResponse],
			postsCount: 10,
		};
	}
}

describe('Get posts by user usecase', () => {
	let usecase: GetPostsByUserUsecase;
	let getPostsSpy: MockInstance;

	let getProfilePostsReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const ports = new TestGetPostsHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultGetPostsByUserUsecase(ports, reduxState);

		getPostsSpy = vi.spyOn(ports, 'getPostsByUser');
		getProfilePostsReduxSpy = vi.spyOn(reduxState, 'getProfilePosts');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.getPostsByUser({ userId: '' });

		expect(getProfilePostsReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if getPosts method fails', async () => {
		getPostsSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.getPostsByUser({ userId: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
