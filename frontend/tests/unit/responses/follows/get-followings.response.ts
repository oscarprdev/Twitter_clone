import { GetFollowingInfraResponse } from '../../../../features/followers/infra/followers.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulGetFollowingsResponse: GetFollowingInfraResponse = {
	following: [userDbTestResponse],
	count: 1,
};
