import { Locator, Page } from '@playwright/test';

export class AppPage {
	readonly home: Locator;

	readonly postTextarea: Locator;
	readonly uploadImageIcon: Locator;
	readonly uploadImageCheckIcon: Locator;
	readonly addPostButton: Locator;
	readonly post: Locator;
	readonly userImage: Locator;
	readonly postImage: Locator;

	constructor(protected page: Page) {
		this.home = page.getByTestId('home');
		this.postTextarea = page.getByRole('textbox');
		this.uploadImageIcon = page.getByTestId('image-upload');
		this.uploadImageCheckIcon = page.getByTestId('image-check');
		this.addPostButton = page.getByRole('button', { name: 'Post' });
		this.post = page.getByTestId('post');
		this.userImage = page.getByAltText('Profile image');
		this.postImage = page.getByAltText('Post image');
	}

	getAddPostButton() {
		return this.home.locator(this.addPostButton);
	}

	getPostUserImage() {
		return this.post.locator(this.userImage);
	}

	getPostImage() {
		return this.post.locator(this.postImage);
	}

	async addPostContent() {
		await this.postTextarea.fill('Mocked post content');
	}

	async addPostContentWithImage() {
		await this.postTextarea.fill('Mocked post content');
		await this.uploadImage();
	}

	async uploadImage() {
		const fileChooserPromise = this.page.waitForEvent('filechooser');

		await this.uploadImageIcon.click();
		const fileChooser = await fileChooserPromise;

		await fileChooser.setFiles('./tests/e2e/mocks/mock-image.jpeg');
	}
}
