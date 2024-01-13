import { HttpInfra } from '../../shared/infra/http.infra';
import { GetUserByIdPayload, GetUserByIdResponse, GetUsersBySearchInfraInput, GetUsersBySearchInfraResponse } from './users.infra.models';

export interface UsersInfra {
	getUsersBySearch(input: GetUsersBySearchInfraInput): Promise<GetUsersBySearchInfraResponse>;
	getUserById({ userId }: GetUserByIdPayload): Promise<GetUserByIdResponse>;
}

export class DefaultUsersInfra extends HttpInfra implements UsersInfra {
	constructor(private readonly API_URL: string) {
		super();
	}

	async getUsersBySearch({ searchValue }: GetUsersBySearchInfraInput): Promise<GetUsersBySearchInfraResponse> {
		const url = `${this.API_URL}/users/search/${searchValue}`;

		return await this.GET<GetUsersBySearchInfraResponse>(url);
	}

	async getUserById({ userId }: GetUserByIdPayload): Promise<GetUserByIdResponse> {
		const url = `${this.API_URL}/users/${userId}`;

		return await this.GET<GetUserByIdResponse>(url);
	}
}
