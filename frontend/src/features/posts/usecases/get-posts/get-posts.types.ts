import { Post } from '../../../../types/posts';

export type GetPostsUsecaseOutput = SuccessGetPostsUsecaseOutput | ErrorGetPostsUsecaseOutput;

interface SuccessGetPostsUsecaseOutput {
	posts: Post[];
	state: 'success';
}

interface ErrorGetPostsUsecaseOutput {
	error: string;
	state: 'error';
}
