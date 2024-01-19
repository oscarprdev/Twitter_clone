import { GetUserByAuthInfraOutput } from '../../../../src/features/users/infra/users.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulUserAuthResponse: GetUserByAuthInfraOutput = {
	user: userDbTestResponse,
};
