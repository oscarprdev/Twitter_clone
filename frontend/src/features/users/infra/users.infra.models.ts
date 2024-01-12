import { DbUser } from '../../shared/types/user';

export interface GetUsersBySearchInfraInput {
	searchValue: string;
}

export interface GetUsersBySearchInfraResponse {
	users: DbUser[];
}
