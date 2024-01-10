export interface AddPostPorts {
	addPost(input: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput>;
}

export namespace AddPostPorts {
	export interface AddPostInput {
		post: string;
		userId: string;
	}

	export interface AddPostOutput {
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
