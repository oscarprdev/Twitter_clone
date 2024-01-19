import { API_URL } from '../../../src/features/shared/domain/constants/constants';
import { FulfillResponse } from '../types/fullfill-response';
import { test as base } from './app-fixture';

interface PostsFixture {
	setPostsResponse(response: FulfillResponse): Promise<void>;
	setAddPostResponse(response: FulfillResponse): Promise<void>;
	setAuthResponse(response: FulfillResponse): Promise<void>;
	setPostLikesResponse(response: FulfillResponse): Promise<void>;
	setUsersLikesResponse(response: FulfillResponse): Promise<void>;
}

export const test = base.extend<PostsFixture>({
	setPostsResponse: async ({ setRoute }, use) => {
		await use(async (response: FulfillResponse) => {
			await setRoute({
				url: new RegExp(`${API_URL}/posts`),
				response,
			});
		});
	},
	setAddPostResponse: async ({ setRoute }, use) => {
		await use(async (response: FulfillResponse) => {
			await setRoute({
				url: new RegExp(`${API_URL}/posts`),
				response,
			});
		});
	},
	setAuthResponse: async ({ setRoute }, use) => {
		await use(async (response: FulfillResponse) => {
			await setRoute({
				url: new RegExp(`${API_URL}/users/auth`),
				response,
			});
		});
	},
	setPostLikesResponse: async ({ setRoute }, use) => {
		await use(async (response: FulfillResponse) => {
			await setRoute({
				url: new RegExp(`${API_URL}/likes/post/*`),
				response,
			});
		});
	},
	setUsersLikesResponse: async ({ setRoute }, use) => {
		await use(async (response: FulfillResponse) => {
			await setRoute({
				url: new RegExp(`${API_URL}/users/likes/*`),
				response,
			});
		});
	},
});
