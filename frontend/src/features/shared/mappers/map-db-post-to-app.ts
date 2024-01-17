import Post from '../../../framework/components/Home/Post';
import { DbPost } from '../../posts/infra/post.infra.models';

export const mapDbPostToUsecase = ({ updated_at, userId, post, id, owner, image }: DbPost): Post => {
	return {
		id,
		updatedAt: updated_at,
		userId: userId,
		post,
		image,
		owner,
	};
};
