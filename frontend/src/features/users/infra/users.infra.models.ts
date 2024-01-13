import { DbUser } from '../../shared/domain/types/user';

export interface GetUsersBySearchInfraInput {
	searchValue: string;
}

export interface GetUsersBySearchInfraResponse {
	users: DbUser[];
}
