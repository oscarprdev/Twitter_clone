import { StateUsecase } from '../../../shared/application/redux.usecase';
import { GetUserAuthPorts } from './get-user-auth.ports';
import { GetUserAuthInput } from './get-user-auth.types';

export interface GetUserAuthUsecase {
	getUserAuth(input: GetUserAuthInput): Promise<void>;
}

export class DefaultGetUserAuthUsecase implements GetUserAuthUsecase {
	constructor(private readonly ports: GetUserAuthPorts, private readonly stateUsecase: StateUsecase) {}

	async getUserAuth({ jwt }: GetUserAuthInput): Promise<void> {
		try {
			const { user } = await this.ports.getUserAuth({ jwt });

			this.stateUsecase.updateUserLogged(user);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error authorising user: ${err}`);
		}
	}
}
