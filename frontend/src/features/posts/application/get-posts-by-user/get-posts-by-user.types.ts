import { Post } from '../../../shared/domain/types/posts';

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
