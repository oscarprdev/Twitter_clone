import { DbUser, User } from '../domain/types/user';

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
