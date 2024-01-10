import { GetUnfollowersInfraPayload, GetUnfollowersInfraResponse } from './followers.infra.models';

export interface FollowersInfra {
	getUnfollowers(input: GetUnfollowersInfraPayload): Promise<GetUnfollowersInfraResponse>;
}

export class DefaultFollowersInfra {
	constructor(private readonly API_URL: string) {}

	async getUnfollowers({ userId }: GetUnfollowersInfraPayload): Promise<GetUnfollowersInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/unfollowers/${userId}`);

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error retrieving all unfollowers: ${error}`);
		}
	}
}
