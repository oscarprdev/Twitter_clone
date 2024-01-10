import { User } from '../../../../types/user';

enum GetUserLoggedTypes {
	getUserLogged = 'GET_USER_LOGGED',
}

export interface GetUserLoggedPayload {
	type: GetUserLoggedTypes.getUserLogged;
	user: User;
}

export const GET_USER_LOGGED_TYPES = {
	GET_USER_LOGGED: 'GET_USER_LOGGED' as GetUserLoggedTypes.getUserLogged,
};
