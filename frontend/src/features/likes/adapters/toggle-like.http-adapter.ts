import { LikesInfra } from '../infra/likes.infra';
import { ToggleLikePorts } from '../usecases/toggle-like/toggle-like.ports';

export class ToggleLikeHttpAdapter implements ToggleLikePorts {
	constructor(private readonly httpClient: LikesInfra) {}

	async getUsersLikesFromPost({
		postId,
	}: ToggleLikePorts.GetUsersLikesFromPostInput): Promise<ToggleLikePorts.GetUsersLikesFromPostOutput> {
		const response = await this.httpClient.getUsersLikesFromPost({ postId });

		return {
			usersIds: response.users.map((user) => user.id),
		};
	}

	async toggleLike({ userId, postId }: ToggleLikePorts.ToggleLikeInput): Promise<ToggleLikePorts.ToggleLikeOutput> {
		const response = await this.httpClient.toggleLike({ userId, postId });

		return {
			isLikeDeleted: response.isLikeDeleted,
			numLikes: response.numLikes,
		};
	}
}
