export interface AddPostPorts {
	addPost(input: AddPostPorts.AddPostInput): Promise<AddPostPorts.AddPostOutput>;
	uploadImage(input: AddPostPorts.UploadImageInput): Promise<AddPostPorts.UploadImageOutput>;
}

export namespace AddPostPorts {
	export interface AddPostInput {
		post: string;
		userId: string;
		image: string;
	}

	export interface AddPostOutput {
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

	export interface UploadImageInput {
		file: File;
		userId: string;
	}

	export interface UploadImageOutput {
		url: string;
	}
}
