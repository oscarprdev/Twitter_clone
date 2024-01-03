import { Post } from '../../../../types/posts';

export interface AddPostUsecaseInput {
	post: string;
	userId: string;
}

export type AddPostUsecaseResponse = SuccessGenerateInfoOuptut | ErrorGenerateInfoOutput;

export interface SuccessGenerateInfoOuptut {
	post: Post;
	state: 'success';
}

export interface ErrorGenerateInfoOutput {
	error: string;
	state: 'error';
}
