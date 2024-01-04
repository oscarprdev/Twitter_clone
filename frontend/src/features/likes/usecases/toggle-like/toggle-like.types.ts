export interface ToogleLikeInput {
	userId: string;
	postId: string;
}

export type ToggleLikeOutput = SuccessToggleLikeOutput | ErrorToggleLikeOutput;

export interface SuccessToggleLikeOutput {
	state: 'success';
	isLikeAdded: boolean;
	isLikeDeleted: boolean;
}

export interface ErrorToggleLikeOutput {
	state: 'error';
	error: string;
}
