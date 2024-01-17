import { MockInstance, beforeEach, describe, expect, it, vi } from 'vitest';
import { GetUnfollowersPorts } from './get-unfollowers.ports';
import { DefaultGetUnfollowersUsecase, GetUnfollowersUsecase } from './get-unfollowers.usecase';
import { userTestResponse } from '../../../../tests/unit/responses/users.response';
import { DefaultReduxUsecase } from '../../../shared/application/redux.usecase';
import { mockStore } from '../../../../tests/unit/store/store.mock';

class MockSearchUsersHttpAdapter implements GetUnfollowersPorts {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getUnfollowers(_input: GetUnfollowersPorts.GetUnfollowersInput): Promise<GetUnfollowersPorts.GetUnfollowersOutput> {
		return {
			unfollowers: [userTestResponse],
			count: 1,
		};
	}
}

describe('Search users usecase', () => {
	let usecase: GetUnfollowersUsecase;

	let getUnfollowersSpy: MockInstance;

	let updateUnfollowersReduxSpy: MockInstance;
	let errorReduxSpy: MockInstance;

	beforeEach(() => {
		const mockHttpAdapter = new MockSearchUsersHttpAdapter();
		const reduxState = new DefaultReduxUsecase(mockStore.dispatch);

		usecase = new DefaultGetUnfollowersUsecase(mockHttpAdapter, reduxState);

		getUnfollowersSpy = vi.spyOn(mockHttpAdapter, 'getUnfollowers');

		updateUnfollowersReduxSpy = vi.spyOn(reduxState, 'updateUnfollowers');
		errorReduxSpy = vi.spyOn(reduxState, 'updateErrorState');
	});

	it('Should return success response', async () => {
		await usecase.getUnfollowers({ userId: '' });

		expect(updateUnfollowersReduxSpy).toHaveBeenCalledOnce();
	});

	it('Should return error response if http request fails', async () => {
		getUnfollowersSpy.mockImplementationOnce(() => Promise.reject({}));

		await usecase.getUnfollowers({ userId: '' });

		expect(errorReduxSpy).toHaveBeenCalledOnce();
	});
});
