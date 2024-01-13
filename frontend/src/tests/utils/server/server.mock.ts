import { HttpResponse, http } from 'msw';
import { API_URL } from '../../../features/shared/constants/constants';
import { userMocked } from '../user.mock';
import { setupServer } from 'msw/node';
import { postMocked } from '../post.mock';

export const mockGetPosts = () => {
	return http.get(`${API_URL}/posts`, () => {
		return HttpResponse.json({
			posts: [postMocked],
		});
	});
};

export const mockLike = () => {
	return http.post(`${API_URL}/likes`, () => {
		return HttpResponse.json({
			isLikeDeleted: false,
			numLikes: 1,
		});
	});
};

export const mockGetLikes = () => {
	return http.get(`${API_URL}/likes/post/${postMocked.id}`, () => {
		return HttpResponse.json({
			postId: postMocked.id,
			post: 'This is a post',
			userId: userMocked.id,
			numLikes: 0,
		});
	});
};

export const mockUsersLikes = () => {
	return http.get(`${API_URL}/users/likes/${postMocked.id}`, () => {
		return HttpResponse.json({
			users: [userMocked],
		});
	});
};

export const mockSearchUser = () => {
	return http.get(`${API_URL}/users/search/mock`, () => {
		return HttpResponse.json({
			users: [userMocked],
		});
	});
};

export const mockHandlers = [mockSearchUser(), mockLike(), mockGetLikes(), mockUsersLikes(), mockGetPosts()];

export const serverMocked = setupServer(...mockHandlers);
