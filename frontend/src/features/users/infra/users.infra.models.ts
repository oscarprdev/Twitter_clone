import { DbUser } from '../../shared/domain/types/user';

export interface GetUsersBySearchInfraInput {
	searchValue: string;
}

export interface GetUsersBySearchInfraResponse {
	users: DbUser[];
}

export interface GetUserByIdPayload {
	userId: string;
}

export interface GetUserByIdResponse {
	user: DbUser;
}
