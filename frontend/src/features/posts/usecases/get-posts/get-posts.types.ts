import { Post } from '../../../shared/types/posts';

export type GetPostsUsecaseOutput = SuccessGetPostsUsecaseOutput | ErrorGetPostsUsecaseOutput;

interface SuccessGetPostsUsecaseOutput {
	posts: Post[];
	state: 'success';
}

interface ErrorGetPostsUsecaseOutput {
	error: string;
	state: 'error';
}
