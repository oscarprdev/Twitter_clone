import { User } from '../../../shared/domain/types/user';

export interface SearchUsersPorts {
	getUsersBySearch(input: SearchUsersPorts.GetUsersBySearchInput): Promise<SearchUsersPorts.GetUsersBySearchOutput>;
}

export namespace SearchUsersPorts {
	export interface GetUsersBySearchInput {
		searchValue: string;
	}

	export interface GetUsersBySearchOutput {
		users: User[];
	}
}
