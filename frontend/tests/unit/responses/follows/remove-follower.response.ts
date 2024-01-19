import { RemoveFollowInfraResponse } from '../../../../src/features/followers/infra/followers.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulRemoveFollowerResponse: RemoveFollowInfraResponse = {
	user: userDbTestResponse,
	unfollowTo: userDbTestResponse,
};
