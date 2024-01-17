import { GetAllUsersPorts } from './get-all-users.port';
import { GetAllUsersOutput } from './get-all-users.types';

export interface GetAllUsersUsecase {
	getAllUsers(): Promise<GetAllUsersOutput>;
}

export class DefaultGetAllUsersUsecase implements GetAllUsersUsecase {
	constructor(private readonly ports: GetAllUsersPorts) {}

	async getAllUsers(): Promise<GetAllUsersOutput> {
		try {
			const { users } = await this.ports.getAllUsers();

			return {
				state: 'success',
				users,
			};
		} catch (err: unknown) {
			return {
				error: `Error providing all users: ${err}`,
				state: 'error',
			};
		}
	}
}
