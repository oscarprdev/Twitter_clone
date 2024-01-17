import { DbPost } from '../../../features/posts/infra/post.infra.models';
import { Post } from '../../../features/shared/domain/types/posts';
import { userTestResponse } from './users.response';

export const postResponse: Post = {
	id: 'a53706f2-211b-4ac5-a37a-56d9e1481184',
	updatedAt: '2024-01-10T12:06:18.020377Z',
	userId: userTestResponse.id,
	post: 'First post',
	owner: {
		name: userTestResponse.name,
		surname: userTestResponse.surname,
		username: userTestResponse.username,
		profileImgUrl: userTestResponse.profileImgUrl,
		email: userTestResponse.email,
	},
	image: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/default-avatar.png',
};

export const postDbResponse: DbPost = {
	id: 'f78f8200-2b58-40e6-bc35-7a71bb8e29ea',
	created_at: '2024-01-12T12:32:32.289464Z',
	updated_at: '2024-01-12T12:32:32.289464Z',
	userId: '10cf35c4-adab-4057-b41b-6f55d0d0af7d',
	post: 'post content',
	owner: {
		name: userTestResponse.name,
		surname: userTestResponse.surname,
		username: userTestResponse.username,
		profileImgUrl: userTestResponse.profileImgUrl,
		email: userTestResponse.email,
	},
	image: 'https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/default-avatar.png',
};
