import { SearchUsersPorts } from './search-users.ports';
import { GetUsersBySearchInput, GetUsersBySearchOutput } from './search-users.types';

export interface SearchUsersUsecase {
	getUsersBySearch(input: GetUsersBySearchInput): Promise<GetUsersBySearchOutput>;
}

export class DefaultSearchUsersUsecase implements SearchUsersUsecase {
	constructor(private readonly ports: SearchUsersPorts) {}

	async getUsersBySearch(input: GetUsersBySearchInput): Promise<GetUsersBySearchOutput> {
		try {
			const { users } = await this.ports.getUsersBySearch({ searchValue: input.searchValue });

			return {
				state: 'success',
				users,
			};
		} catch (err: unknown) {
			return {
				error: `Error searching users: ${err}`,
				state: 'error',
			};
		}
	}
}
