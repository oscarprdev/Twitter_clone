export interface GetPostsPorts {
	getPosts(input: GetPostsPorts.GetPostsInput): Promise<GetPostsPorts.GetPostsOutput>;
}

export namespace GetPostsPorts {
	export interface GetPostsInput {
		limit: number;
		offset: number;
	}

	export interface GetPostsOutput {
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
		name: string;
		surname: string;
		username: string;
		profileImgUrl: string;
		email: string;
	}
}
