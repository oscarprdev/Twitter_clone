import { User } from '../../../shared/domain/types/user';

export interface GetUnfollowersPorts {
	getUnfollowers(input: GetUnfollowersPorts.GetUnfollowersInput): Promise<GetUnfollowersPorts.GetUnfollowersOutput>;
}

export namespace GetUnfollowersPorts {
	export interface GetUnfollowersInput {
		userId: string;
	}

	export interface GetUnfollowersOutput {
		unfollowers: User[];
		count: number;
	}
}
