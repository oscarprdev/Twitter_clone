import { Post } from '../../../shared/types/posts';

export interface GetPostsByUserInput {
	userId: string;
}

export type GetPostsByUserUsecaseOutput = SuccessGetPostsByUserUsecaseOutput | ErrorGetPostsByUserUsecaseOutput;

interface SuccessGetPostsByUserUsecaseOutput {
	posts: Post[];
	postsCount: number;
	state: 'success';
}

interface ErrorGetPostsByUserUsecaseOutput {
	error: string;
	state: 'error';
}
