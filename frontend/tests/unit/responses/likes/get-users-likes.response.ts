import { GetUsersLikesFromPostResponse } from '../../../../features/likes/infra/likes.models';
import { userTestResponse } from '../users.response';

export const SuccessfulGetUsersLikesResponse: GetUsersLikesFromPostResponse = {
	users: [userTestResponse],
};
