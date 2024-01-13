import { ToggleLikePorts } from './toggle-like.ports';
import { IsUserAlreadyLikedInput, ToggleLikeOutput, ToogleLikeInput } from './toggle-like.types';

export interface ToggleLikeUsecase {
	toggleLike(input: ToogleLikeInput): Promise<ToggleLikeOutput>;
	isUserAlreadyLiked(input: IsUserAlreadyLikedInput): Promise<boolean>;
}

export class DefaultToggleLikeUsecase implements ToggleLikeUsecase {
	constructor(private readonly ports: ToggleLikePorts) {}

	async isUserAlreadyLiked({ postId, userId }: IsUserAlreadyLikedInput): Promise<boolean> {
		const { usersIds } = await this.ports.getUsersLikesFromPost({ postId });

		const user = usersIds.find((id) => id === userId);

		return !!user;
	}

	async toggleLike({ userId, postId }: ToogleLikeInput): Promise<ToggleLikeOutput> {
		try {
			const { isLikeDeleted, numLikes } = await this.ports.toggleLike({ userId, postId });

			return {
				state: 'success',
				isLikeDeleted,
				numLikes,
			};
		} catch (err: unknown) {
			return {
				state: 'error',
				error: `Error toggling like: ${err}`,
			};
		}
	}
}
