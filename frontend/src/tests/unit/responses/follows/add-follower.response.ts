import { AddFollowInfraResponse } from '../../../../features/followers/infra/followers.infra.models';
import { userDbTestResponse, userTestResponse } from '../users.response';

export const SuccessfulAddFollowResponse: AddFollowInfraResponse = {
	user: { ...userDbTestResponse, id: userTestResponse.id },
	followTo: userDbTestResponse,
};
