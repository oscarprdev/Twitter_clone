export interface GetLikesInfraResponse {
	postId: string;
	userId: string;
	post: string;
	numLikes: number;
}

export interface GetLikesInfraInput {
	postId: string;
}
