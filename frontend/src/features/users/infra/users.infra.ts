import { GetUsersBySearchInfraInput, GetUsersBySearchInfraResponse } from './users.infra.models';

export interface UsersInfra {
	getUsersBySearch(input: GetUsersBySearchInfraInput): Promise<GetUsersBySearchInfraResponse>;
}

export class DefaultUsersInfra implements UsersInfra {
	constructor(private readonly API_URL: string) {}

	async getUsersBySearch({ searchValue }: GetUsersBySearchInfraInput): Promise<GetUsersBySearchInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/users/search/${searchValue}`);

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error) {
			throw new Error(`Error searching users: ${error}`);
		}
	}
}
