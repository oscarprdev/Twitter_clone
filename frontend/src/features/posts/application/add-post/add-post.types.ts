export interface AddPostUsecaseInput {
	post: string;
	userId: string;
	file: File | null;
}

export interface UploadImagesInput {
	file: File;
	userId: string;
}

export interface UploadImageOutput {
	url: string;
}
