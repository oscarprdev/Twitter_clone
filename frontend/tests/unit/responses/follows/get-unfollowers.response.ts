import { GetUnfollowersInfraResponse } from '../../../../src/features/followers/infra/followers.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulGetUnfollowersResponse: GetUnfollowersInfraResponse = {
	unfollowers: [userDbTestResponse],
	count: 1,
};

export const SuccessfulGetUnfollowersEmptyResponse: GetUnfollowersInfraResponse = {
	unfollowers: [],
	count: 0,
};
