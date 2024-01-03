export interface AddPostPorts {
	addPost(input: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput>;
	getUser(input: AddPostPorts.GetUserInput): Promise<AddPostPorts.GetUserOutput>;
}

export namespace AddPostPorts {
	export interface AddPostInput {
		post: string;
		userId: string;
	}

	export interface AddPostOutput {
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
