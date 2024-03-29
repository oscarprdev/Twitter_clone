export interface ToogleLikeInput {
	userId: string;
	postId: string;
}

export interface IsUserAlreadyLikedInput {
	userId: string;
	postId: string;
}

export type ToggleLikeOutput = SuccessToggleLikeOutput | ErrorToggleLikeOutput;

export interface SuccessToggleLikeOutput {
	state: 'success';
	isLikeDeleted: boolean;
	numLikes: number;
}

export interface ErrorToggleLikeOutput {
	state: 'error';
	error: string;
}
