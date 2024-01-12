import {
	AddFollowInfraPayload,
	AddFollowInfraResponse,
	GetFollowersInfraPayload,
	GetFollowersInfraResponse,
	GetFollowingInfraPayload,
	GetFollowingInfraResponse,
	GetUnfollowersInfraPayload,
	GetUnfollowersInfraResponse,
} from './followers.infra.models';

export interface FollowersInfra {
	getFollowers(input: GetFollowersInfraPayload): Promise<GetFollowersInfraResponse>;
	getFollowing(input: GetFollowingInfraPayload): Promise<GetFollowingInfraResponse>;
	getUnfollowers(input: GetUnfollowersInfraPayload): Promise<GetUnfollowersInfraResponse>;
	addFollow(input: AddFollowInfraPayload): Promise<AddFollowInfraResponse>;
}

export class DefaultFollowersInfra {
	constructor(private readonly API_URL: string) {}

	async getFollowers({ userId }: GetFollowersInfraPayload): Promise<GetFollowersInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/followers/${userId}`);

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error retrieving all followers: ${error}`);
		}
	}

	async getFollowing({ userId }: GetFollowingInfraPayload): Promise<GetFollowingInfraResponse> {
		try {
			const response = await fetch(`${this.API_URL}/followings/${userId}`);

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`Error retrieving all following users: ${error}`);
		}
	}

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
