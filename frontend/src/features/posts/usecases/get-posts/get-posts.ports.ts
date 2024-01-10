export interface GetPostsPorts {
	getPosts(): Promise<GetPostsPorts.GetPostsOutput>;
}

export namespace GetPostsPorts {
	export interface GetPostsOutput {
		posts: PostResponse[];
	}

	export interface PostResponse {
		id: string;
		updatedAt: string;
		userId: string;
		post: string;
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
