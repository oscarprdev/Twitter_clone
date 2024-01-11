import {
	AddFollowInfraPayload,
	AddFollowInfraResponse,
	GetUnfollowersInfraPayload,
	GetUnfollowersInfraResponse,
} from './followers.infra.models';

export interface FollowersInfra {
	getUnfollowers(input: GetUnfollowersInfraPayload): Promise<GetUnfollowersInfraResponse>;
	addFollow(input: AddFollowInfraPayload): Promise<AddFollowInfraResponse>;
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

	async addFollow({ userId, followTo }: AddFollowInfraPayload): Promise<AddFollowInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/follower`, {
				method: 'POST',
				body: JSON.stringify({
					userId,
					followTo,
				}),
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error adding a follower: ${error}`);
		}
	}
}
