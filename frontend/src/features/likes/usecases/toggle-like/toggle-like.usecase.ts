import { ToggleLikePorts } from './toggle-like.ports';
import { ToggleLikeOutput, ToogleLikeInput } from './toggle-like.types';

export interface ToggleLikeUsecase {
	toggleLike(input: ToogleLikeInput): Promise<ToggleLikeOutput>;
}

export class DefaultToggleLikeUsecase implements ToggleLikeUsecase {
	constructor(private readonly ports: ToggleLikePorts) {}

	private async isUserAlreadyLiked(userId: string, postId: string): Promise<boolean> {
		const { usersIds } = await this.ports.getUsersLikesFromPost({ postId });

		const user = usersIds.find((id) => id === userId);

		return !!user;
	}

	async toggleLike({ userId, postId }: ToogleLikeInput): Promise<ToggleLikeOutput> {
		try {
			const isAlreadyLiked = await this.isUserAlreadyLiked(userId, postId);

			if (isAlreadyLiked) {
				await this.ports.deleteLike({ postId, userId });

				return {
					state: 'success',
					isLikeAdded: false,
					isLikeDeleted: true,
				};
			}

			if (!isAlreadyLiked) {
				await this.ports.addLike({ postId, userId });

				return {
					state: 'success',
					isLikeAdded: true,
					isLikeDeleted: false,
				};
			}

			return {
				state: 'success',
				isLikeAdded: false,
				isLikeDeleted: false,
			};
		} catch (err: unknown) {
			return {
				state: 'error',
				error: `Error toggling like: ${err}`,
			};
		}
	}
}
