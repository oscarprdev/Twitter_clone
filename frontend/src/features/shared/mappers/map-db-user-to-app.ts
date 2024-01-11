import { User } from '../types/user';
import { DbUser } from '../../followers/infra/followers.infra.models';

export const mapDbUserToApplication = (dbUser: DbUser): User => {
	return {
		id: dbUser.id,
		createdAt: dbUser.created_at,
		updatedAt: dbUser.updated_at,
		name: dbUser.name,
		surname: dbUser.surname,
		username: dbUser.username,
		email: dbUser.email,
		profileImgUrl: dbUser.profileImgUrl,
		profileBgImgUrl: dbUser.profileBgImgUrl,
	};
};
