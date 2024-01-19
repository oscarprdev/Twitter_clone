import { GetLikesInfraResponse } from '../../../../features/likes/infra/likes.models';
import { postResponse } from '../posts.response';
import { userTestResponse } from '../users.response';

export const SuccessfulGetLikesResponse: GetLikesInfraResponse = {
	postId: postResponse.id,
	post: 'This is a post',
	userId: userTestResponse.id,
	numLikes: 5,
};

export const SuccessfulGetLowerLikesResponse: GetLikesInfraResponse = {
	postId: postResponse.id,
	post: 'This is a post',
	userId: userTestResponse.id,
	numLikes: 4,
};
