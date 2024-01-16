import { GetUserAuthPorts } from './get-user-auth.ports';
import { GetUserAuthInput, GetUserAuthOutput } from './get-user-auth.types';

export interface GetUserAuthUsecase {
	getUserAuth(input: GetUserAuthInput): Promise<GetUserAuthOutput>;
}

export class DefaultGetUserAuthUsecase implements GetUserAuthUsecase {
	constructor(private readonly ports: GetUserAuthPorts) {}

	async getUserAuth({ jwt }: GetUserAuthInput): Promise<GetUserAuthOutput> {
		try {
			const { user } = await this.ports.getUserAuth({ jwt });

			return {
				state: 'success',
				user,
			};
		} catch (err: unknown) {
			return {
				error: `Error authorising user: ${err}`,
				state: 'error',
			};
		}
	}
}
