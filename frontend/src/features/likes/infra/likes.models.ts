import { User } from '../../../types/user';

export interface GetLikesInfraInput {
	postId: string;
}

export interface GetLikesInfraResponse {
	postId: string;
	userId: string;
	post: string;
	numLikes: number;
}

export interface AddLikeInfraInput {
	userId: string;
	postId: string;
}

export interface AddLikeInfraResponse {
	id: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	postId: string;
}

export interface DeleteLikeInfraInput {
	userId: string;
	postId: string;
}

export interface DeleteLikeInfraResponse {
	likeDeleted: {
		id: string;
		createdAt: string;
		updatedAt: string;
		userId: string;
		postId: string;
	};
}

export interface GetUsersLikesFromPostInput {
	postId: string;
}

export interface GetUsersLikesFromPostResponse {
	users: User[];
}
