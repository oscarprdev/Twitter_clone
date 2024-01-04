export interface GetLikesPorts {
	getLikes(input: GetLikesPorts.GetLikesInput): Promise<GetLikesPorts.GetLikesOutput>;
}

export namespace GetLikesPorts {
	export interface GetLikesInput {
		postId: string;
	}

	export interface GetLikesOutput {
		postId: string;
		userId: string;
		post: string;
		numLikes: number;
	}
}
