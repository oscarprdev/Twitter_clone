export interface AddPostUsecaseInput {
	post: string;
	userId: string;
}

export type AddPostUsecaseResponse = SuccessGenerateInfoOuptut | ErrorGenerateInfoOutput;

export interface SuccessGenerateInfoOuptut {
	response: {
		post: string;
		updatedAt: string;
		name: string;
		surname: string;
		username: string;
		email: string;
		profileImgUrl: string;
	};
	state: 'success';
}

export interface ErrorGenerateInfoOutput {
	error: string;
	state: 'error';
}
