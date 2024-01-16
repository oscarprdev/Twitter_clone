import { User } from '../../../shared/domain/types/user';

export interface LogInPorts {
	logIn(input: LogInPorts.LogInInput): Promise<LogInPorts.LogInOutput>;
}

export namespace LogInPorts {
	export interface LogInInput {
		email: string;
		password: string;
	}

	export interface LogInOutput {
		userLogged: User;
		jwt: string;
	}
}
