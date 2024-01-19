import { GetUsersBySearchInfraResponse } from '../../../../src/features/users/infra/users.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulSearchUsersResponse: GetUsersBySearchInfraResponse = {
	users: [userDbTestResponse],
};

export const SuccessfulSearchUsersEmptyResponse: GetUsersBySearchInfraResponse = {
	users: [],
};
