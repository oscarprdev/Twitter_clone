import { HttpInfra } from '../../shared/infra/http.infra';
import {
	AddFollowInfraPayload,
	AddFollowInfraResponse,
	GetFollowersInfraPayload,
	GetFollowersInfraResponse,
	GetFollowingInfraPayload,
	GetFollowingInfraResponse,
	GetUnfollowersInfraPayload,
	GetUnfollowersInfraResponse,
	RemoveFollowInfraPayload,
	RemoveFollowInfraResponse,
} from './followers.infra.models';

export interface FollowersInfra {
	getFollowers(input: GetFollowersInfraPayload): Promise<GetFollowersInfraResponse>;
	getFollowing(input: GetFollowingInfraPayload): Promise<GetFollowingInfraResponse>;
	getUnfollowers(input: GetUnfollowersInfraPayload): Promise<GetUnfollowersInfraResponse>;
	addFollow(input: AddFollowInfraPayload): Promise<AddFollowInfraResponse>;
	removeFollow(payload: RemoveFollowInfraPayload): Promise<RemoveFollowInfraResponse>;
}

export class DefaultFollowersInfra extends HttpInfra implements FollowersInfra {
	constructor(private readonly API_URL: string) {
		super();
	}

	async getFollowers({ userId }: GetFollowersInfraPayload): Promise<GetFollowersInfraResponse> {
		const url = `${this.API_URL}/followers/${userId}`;

		return this.GET<GetFollowersInfraResponse>(url);
	}

	async getFollowing({ userId }: GetFollowingInfraPayload): Promise<GetFollowingInfraResponse> {
		const url = `${this.API_URL}/followings/${userId}`;

		return this.GET<GetFollowingInfraResponse>(url);
	}

	async getUnfollowers({ userId }: GetUnfollowersInfraPayload): Promise<GetUnfollowersInfraResponse> {
		const url = `${this.API_URL}/unfollowers/${userId}`;

		return this.GET<GetUnfollowersInfraResponse>(url);
	}

	async addFollow(payload: AddFollowInfraPayload): Promise<AddFollowInfraResponse> {
		const url = `${this.API_URL}/follower`;

		return await this.POST<AddFollowInfraResponse, AddFollowInfraPayload>(url, payload);
	}

	async removeFollow(payload: RemoveFollowInfraPayload): Promise<RemoveFollowInfraResponse> {
		const url = `${this.API_URL}/follower`;

		return await this.DELETE<RemoveFollowInfraResponse, RemoveFollowInfraPayload>(url, payload);
	}
}
