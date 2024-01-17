export interface UploadImagesInput {
	file: File;
    userId: string
}

export type UploadImagesUsecaseOutput = SuccessUploadImagesUsecaseOutput | ErrorUploadImagesUsecaseOutput;

interface SuccessUploadImagesUsecaseOutput {
	url: string;
	state: 'success';
}

interface ErrorUploadImagesUsecaseOutput {
	error: string;
	state: 'error';
}
