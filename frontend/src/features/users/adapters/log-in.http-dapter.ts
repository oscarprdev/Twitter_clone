import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { LogInPorts } from '../application/log-in/log-in.ports';
import { UsersInfra } from '../infra/users.infra';

export class LogInHttpAdapter implements LogInPorts {
	constructor(private readonly httpClient: UsersInfra) {}

	async logIn({ email, password }: LogInPorts.LogInInput): Promise<LogInPorts.LogInOutput> {
		const { userLogged, jwt } = await this.httpClient.logIn({ email, password });

		return {
			userLogged: mapDbUserToApplication(userLogged),
			jwt,
		};
	}
}
