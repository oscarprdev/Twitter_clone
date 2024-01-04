export interface ToggleLikePorts {
	addLike(input: ToggleLikePorts.AddLikeInput): Promise<ToggleLikePorts.AddLikeOutput>;
	deleteLike(input: ToggleLikePorts.DeleteLikeInput): Promise<ToggleLikePorts.DeleteLikeOutput>;
	getUsersLikesFromPost(input: ToggleLikePorts.GetUsersLikesFromPostInput): Promise<ToggleLikePorts.GetUsersLikesFromPostOutput>;
}

export namespace ToggleLikePorts {
	export interface AddLikeInput {
		userId: string;
		postId: string;
	}

	export interface AddLikeOutput {
		userId: string;
		postId: string;
	}

	export interface DeleteLikeInput {
		userId: string;
		postId: string;
	}

	export interface DeleteLikeOutput {
		userId: string;
		postId: string;
	}

	export interface GetUsersLikesFromPostInput {
		postId: string;
	}

	export interface GetUsersLikesFromPostOutput {
		usersIds: string[];
	}
}
