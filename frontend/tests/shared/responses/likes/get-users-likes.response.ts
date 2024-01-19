import { GetUsersLikesFromPostResponse } from '../../../../src/features/likes/infra/likes.models';
import { userTestResponse } from '../users.response';

export const SuccessfulGetUsersLikesResponse: GetUsersLikesFromPostResponse = {
	users: [userTestResponse],
};

export const SuccessfulGetUsersLikesEmptyResponse: GetUsersLikesFromPostResponse = {
	users: [],
};
