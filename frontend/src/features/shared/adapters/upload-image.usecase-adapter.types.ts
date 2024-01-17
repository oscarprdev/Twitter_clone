export interface UploadImageUsecaseAdapterInput {
	file: File;
	userId: string;
}

export interface UploadImageUsecaseAdapterOutput {
	url: string;
}
