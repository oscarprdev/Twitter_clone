import { GetLikesInfraResponse } from '../../../../src/features/likes/infra/likes.models';
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

export const SuccessfulGetEmptyLikesResponse: GetLikesInfraResponse = {
	postId: postResponse.id,
	post: 'Mocked post content',
	userId: userTestResponse.id,
	numLikes: 0,
};
