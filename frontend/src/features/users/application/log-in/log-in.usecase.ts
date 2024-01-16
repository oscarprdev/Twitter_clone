import { LogInPorts } from './log-in.ports';
import { LogInInput, LogInOutput } from './log-in.types';

export interface LogInUsecase {
	logIn(input: LogInInput): Promise<LogInOutput>;
}

export class DefaultLogInUsecase implements LogInUsecase {
	constructor(private readonly ports: LogInPorts) {}

	private updateJWT(jwt: string) {
		localStorage.clear();
		localStorage.setItem('jwt', jwt);
	}

	async logIn({ email, password }: LogInInput): Promise<LogInOutput> {
		try {
			const { userLogged, jwt } = await this.ports.logIn({ email, password });

			this.updateJWT(jwt);

			return {
				state: 'success',
				user: userLogged,
			};
		} catch (err: unknown) {
			return {
				error: `Error logging user: ${err}`,
				state: 'error',
			};
		}
	}
}
