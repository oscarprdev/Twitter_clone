export interface ToggleLikePorts {
	toggleLike(input: ToggleLikePorts.ToggleLikeInput): Promise<ToggleLikePorts.ToggleLikeOutput>;
	getUsersLikesFromPost(input: ToggleLikePorts.GetUsersLikesFromPostInput): Promise<ToggleLikePorts.GetUsersLikesFromPostOutput>;
}

export namespace ToggleLikePorts {
	export interface ToggleLikeInput {
		userId: string;
		postId: string;
	}

	export interface ToggleLikeOutput {
		isLikeDeleted: boolean;
		numLikes: number;
	}

	export interface GetUsersLikesFromPostInput {
		postId: string;
	}

	export interface GetUsersLikesFromPostOutput {
		usersIds: string[];
	}
}
