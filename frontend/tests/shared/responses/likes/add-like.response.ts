import { ToggleLikeInfraResponse } from '../../../../src/features/likes/infra/likes.models';

export const SuccessfulAddLikeResponse: ToggleLikeInfraResponse = {
	isLikeDeleted: false,
	numLikes: 6,
};

export const SuccessfulRemoveLikeResponse: ToggleLikeInfraResponse = {
	isLikeDeleted: true,
	numLikes: 4,
};
