import { User } from '../../shared/domain/types/user';

export interface GetLikesInfraInput {
	postId: string;
}

export interface GetLikesInfraResponse {
	postId: string;
	userId: string;
	post: string;
	numLikes: number;
}

export interface ToggleLikeInfraInput {
	userId: string;
	postId: string;
}

export interface ToggleLikeInfraResponse {
	isLikeDeleted: boolean;
	numLikes: number;
}

export interface GetUsersLikesFromPostInput {
	postId: string;
}

export interface GetUsersLikesFromPostResponse {
	users: User[];
}
