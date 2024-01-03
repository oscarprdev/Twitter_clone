export interface GetPostsPorts {
	getPosts(): Promise<GetPostsPorts.GetPostsOutput>;
	getUser(input: GetPostsPorts.GetUserInput): Promise<GetPostsPorts.GetUserOutput>;
}

export namespace GetPostsPorts {
	export interface GetPostsOutput {
		posts: PostResponse[];
	}

	export interface PostResponse {
		updatedAt: string;
		userId: string;
		post: string;
	}

	export interface GetUserInput {
		userId: string;
	}

	export interface GetUserOutput {
		updatedAt: string;
		name: string;
		surname: string;
		username: string;
		email: string;
		profileImgUrl: string;
	}
}
