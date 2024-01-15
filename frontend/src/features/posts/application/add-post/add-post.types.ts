import { Post } from '../../../shared/domain/types/posts';

export interface AddPostUsecaseInput {
	post: string;
	userId: string;
	file: File | null;
}

export type AddPostUsecaseResponse = SuccessAddPostOuptut | ErrorAddPostOutput;

export interface SuccessAddPostOuptut {
	post: Post;
	state: 'success';
}

export interface ErrorAddPostOutput {
	error: string;
	state: 'error';
}

export interface UploadImagesInput {
	file: File;
	userId: string;
}

export interface UploadImageOutput {
	url: string;
}
