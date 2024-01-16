import { StateUsecase } from '../../../shared/application/state.usecase';
import { GetUserPorts } from './get-user.ports';
import { GetUserInput, GetUserOutput } from './get-user.types';

export interface GetUserUsecase {
	getUser(input: GetUserInput): Promise<GetUserOutput>;
}

export class DefaultGetUserUsecase implements GetUserUsecase {
	constructor(private readonly ports: GetUserPorts, private readonly stateUsecase: StateUsecase) {}

	async getUser({ userId }: GetUserInput): Promise<GetUserOutput> {
		try {
			const { user } = await this.ports.getUser({ userId });

			return { user };
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error logging user: ${err}`);

			return {};
		}
	}
}
