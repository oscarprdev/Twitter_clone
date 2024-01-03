export interface AddPostPort {
	addPost(input: AddPostPort.AddPostInput): Promise<AddPostPort.AddPostOutput>;
	getUser(input: AddPostPort.GetUserInput): Promise<AddPostPort.GetUserOutput>;
}

export namespace AddPostPort {
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
