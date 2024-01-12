import { Post } from '../../features/shared/types/posts';
import { userMocked } from './user.mock';

export const postMocked: Post = {
	id: 'a53706f2-211b-4ac5-a37a-56d9e1481184',
	updatedAt: '2024-01-10T12:06:18.020377Z',
	userId: userMocked.id,
	post: 'First post',
	owner: {
		name: userMocked.name,
		surname: userMocked.surname,
		username: userMocked.username,
		profileImgUrl: userMocked.profileImgUrl,
		email: userMocked.email,
	},
};
