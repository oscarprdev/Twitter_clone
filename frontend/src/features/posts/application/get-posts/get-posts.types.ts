import { Post } from '../../../shared/domain/types/posts';

export interface GetPostsInput {
	limit: number;
	offset: number;
}

export type GetPostsUsecaseOutput = SuccessGetPostsUsecaseOutput | ErrorGetPostsUsecaseOutput;

interface SuccessGetPostsUsecaseOutput {
	posts: Post[];
	postsCount: number;
	state: 'success';
}

interface ErrorGetPostsUsecaseOutput {
	error: string;
	state: 'error';
}
