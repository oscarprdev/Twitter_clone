import { StateUsecase } from '../../../shared/application/redux.usecase';
import { LogInPorts } from './log-in.ports';
import { LogInInput } from './log-in.types';

export interface LogInUsecase {
	logIn(input: LogInInput): Promise<void>;
}

export class DefaultLogInUsecase implements LogInUsecase {
	constructor(private readonly ports: LogInPorts, private readonly stateUsecase: StateUsecase) {}

	private updateJWT(jwt: string) {
		localStorage.clear();
		localStorage.setItem('jwt', jwt);
	}

	async logIn({ email, password }: LogInInput): Promise<void> {
		try {
			const { userLogged, jwt } = await this.ports.logIn({ email, password });

			this.updateJWT(jwt);

			this.stateUsecase.updateUserLogged(userLogged);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error logging user: ${err}`);
		}
	}
}
