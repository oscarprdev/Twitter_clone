import { GetUserPorts } from './get-user.ports';
import { GetUserInput, GetUserOutput } from './get-user.types';

export interface GetUserUsecase {
	getUser(input: GetUserInput): Promise<GetUserOutput>;
}

export class DefaultGetUserUsecase implements GetUserUsecase {
	constructor(private readonly ports: GetUserPorts) {}

	async getUser({ userId }: GetUserInput): Promise<GetUserOutput> {
		try {
			const { user } = await this.ports.getUser({ userId });

			return {
				state: 'success',
				user,
			};
		} catch (err: unknown) {
			return {
				error: `Error retrieving user: ${err}`,
				state: 'error',
			};
		}
	}
}
