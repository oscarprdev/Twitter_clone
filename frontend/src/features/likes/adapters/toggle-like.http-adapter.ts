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

	async addLike({ userId, postId }: ToggleLikePorts.AddLikeInput): Promise<ToggleLikePorts.AddLikeOutput> {
		const response = await this.httpClient.addLike({ userId, postId });

		return {
			userId: response.userId,
			postId: response.postId,
		};
	}

	deleteLike({ postId, userId }: ToggleLikePorts.DeleteLikeInput): Promise<ToggleLikePorts.DeleteLikeOutput> {
		return Promise.resolve({
			postId,
			userId,
		});
	}
}
