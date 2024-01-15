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

export interface UpdateUserInfraInput {
	name: string;
	surname: string;
	image: string;
	userId: string;
}

export interface UpdateUserInfraPayload {
	name: string;
	surname: string;
	profileImgUrl: string;
}

export interface UpdateUserInfraOutput {
	user: DbUser;
}
