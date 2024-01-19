import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { GetPostsPorts } from './get-posts.ports';
import { DefaultGetPostsUsecase, GetPostsUsecase } from './get-posts.usecase';
import { postResponse } from '../../../../../tests/unit/responses/posts.response';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../../tests/unit/store/store.mock';

class TestGetPostsHttpAdapter implements GetPostsPorts {
	async getPosts(): Promise<GetPostsPorts.GetPostsOutput> {
		return {
			posts: [postResponse],
			postsCount: 10,
		};
	}
}

describe('Get posts usecase', () => {
	let usecase: GetPostsUsecase;
	let getPostsSpy: MockInstance;

	let getPostsReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const ports = new TestGetPostsHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultGetPostsUsecase(ports, reduxState);

		getPostsSpy = vi.spyOn(ports, 'getPosts');
		getPostsReduxSpy = vi.spyOn(reduxState, 'getPosts');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.getPosts({ limit: 10, offset: 0 });

		expect(getPostsReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if getPosts method fails', async () => {
		getPostsSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.getPosts({ limit: 10, offset: 0 });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
