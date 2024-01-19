import { GetFollowersInfraResponse } from '../../../../src/features/followers/infra/followers.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulGetFollowersResponse: GetFollowersInfraResponse = {
	followers: [userDbTestResponse],
	count: 1,
};
