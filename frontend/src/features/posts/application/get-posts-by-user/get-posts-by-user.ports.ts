export interface GetPostsByUserPorts {
	getPostsByUser(input: GetPostsByUserPorts.GetPostsByUserInput): Promise<GetPostsByUserPorts.GetPostsByUserOutput>;
}

export namespace GetPostsByUserPorts {
	export interface GetPostsByUserInput {
		userId: string;
	}

	export interface GetPostsByUserOutput {
		posts: PostResponse[];
		postsCount: number;
	}

	export interface PostResponse {
		id: string;
		updatedAt: string;
		userId: string;
		post: string;
		image: string;
		owner: PostOwner;
	}

	export interface PostOwner {
		id: string;
		name: string;
		surname: string;
		username: string;
		profileImgUrl: string;
		email: string;
	}
}
