import { LogInInfraOutput } from '../../../../src/features/users/infra/users.infra.models';
import { userDbTestResponse } from '../users.response';

export const SuccessfulUserLoggedResponse: LogInInfraOutput = {
	userLogged: userDbTestResponse,
	jwt: 'asdasd',
};
