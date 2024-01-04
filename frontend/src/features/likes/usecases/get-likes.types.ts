export interface GetLikesPayload {
	postId: string;
}

export type GetLikesOutput = SuccessGetLikesOutput | ErrorGetLikesOutput;

interface SuccessGetLikesOutput {
	likeInfo: LikeInfo;
	state: 'success';
}

interface ErrorGetLikesOutput {
	error: string;
	state: 'error';
}

export interface LikeInfo {
	postId: string;
	userId: string;
	post: string;
	numLikes: number;
}
