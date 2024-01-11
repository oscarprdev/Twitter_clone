import { Post } from '../../../shared/types/posts';

export interface AddPostUsecaseInput {
	post: string;
	userId: string;
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
