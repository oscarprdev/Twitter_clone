import { expect } from '@playwright/test';
import { SuccessfulGetPostsEmptyResponse, SuccessfulGetPostsResponse } from '../shared/responses/posts/get-posts.responses';
import { SuccessfulUserAuthResponse } from '../shared/responses/users/user-auth.response';
import { test } from './fixtures/posts-fixture';
import { SuccessfulGetUsersLikesEmptyResponse } from '../shared/responses/likes/get-users-likes.response';
import { SuccessfulGetEmptyLikesResponse } from '../shared/responses/likes/get-likes.response';
import { SuccessfulAddPostResponse } from '../shared/responses/posts/add-post.responses';

test.describe('Add posts', () => {
	test.beforeEach(async ({ setAuthResponse }) => {
		await setAuthResponse({ json: SuccessfulUserAuthResponse });
	});

	test('Should add a simple post successfully', async ({
		appPage,
		navigateToApp,
		setPostsResponse,
		setAddPostResponse,
		setUsersLikesResponse,
		setPostLikesResponse,
	}) => {
		await setPostsResponse({ json: SuccessfulGetPostsEmptyResponse });
		await navigateToApp();

		await expect(appPage.home).toBeVisible();

		const addPostButtonHome = appPage.getAddPostButton();

		await expect(addPostButtonHome).toBeVisible();
		await expect(addPostButtonHome).toBeDisabled();
		expect(appPage.post).not.toBeVisible();

		await setPostsResponse({ json: SuccessfulGetPostsResponse });
		await setUsersLikesResponse({ json: SuccessfulGetUsersLikesEmptyResponse });
		await setPostLikesResponse({ json: SuccessfulGetEmptyLikesResponse });

		await appPage.addPostContent();
		await expect(addPostButtonHome).not.toBeDisabled();

		await setAddPostResponse({ json: SuccessfulAddPostResponse });

		await addPostButtonHome.click();

		await expect(appPage.post).toBeVisible();

		const postUserImage = appPage.getPostUserImage();
		await expect(postUserImage).toBeVisible();
	});

	test('Should add a post with image successfully', async ({
		appPage,
		navigateToApp,
		setPostsResponse,
		setAddPostResponse,
		setUsersLikesResponse,
		setPostLikesResponse,
	}) => {
		await setPostsResponse({ json: SuccessfulGetPostsEmptyResponse });
		await navigateToApp();

		await expect(appPage.home).toBeVisible();

		const addPostButtonHome = appPage.getAddPostButton();

		await expect(addPostButtonHome).toBeVisible();
		await expect(addPostButtonHome).toBeDisabled();
		expect(appPage.post).not.toBeVisible();

		await setPostsResponse({ json: SuccessfulGetPostsResponse });
		await setUsersLikesResponse({ json: SuccessfulGetUsersLikesEmptyResponse });
		await setPostLikesResponse({ json: SuccessfulGetEmptyLikesResponse });

		await appPage.addPostContentWithImage();
		await expect(appPage.uploadImageCheckIcon).toBeVisible();
		await expect(addPostButtonHome).not.toBeDisabled();

		await setAddPostResponse({ json: SuccessfulAddPostResponse });

		await addPostButtonHome.click();

		await expect(appPage.post).toBeVisible();

		const postUserImage = appPage.getPostUserImage();
		const postImage = appPage.getPostImage();

		await expect(postUserImage).toBeVisible();
		await expect(postImage).toBeVisible();
	});
});
