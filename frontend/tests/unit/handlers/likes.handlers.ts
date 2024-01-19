import { HttpResponse, http } from 'msw';
import { API_URL } from '../../../src/features/shared/domain/constants/constants';
import { SuccessfulAddLikeResponse, SuccessfulRemoveLikeResponse } from '../../shared/responses/likes/add-like.response';
import { postResponse } from '../../shared/responses/posts.response';
import { SuccessfulGetLikesResponse, SuccessfulGetLowerLikesResponse } from '../../shared/responses/likes/get-likes.response';
import { SuccessfulGetUsersLikesResponse } from '../../shared/responses/likes/get-users-likes.response';

export const testAddLikeLikeHandler = http.post(`${API_URL}/likes`, () => HttpResponse.json(SuccessfulAddLikeResponse));
export const testRemoveLikeLikeHandler = http.post(`${API_URL}/likes`, () => HttpResponse.json(SuccessfulRemoveLikeResponse));

export const testGetLikesHandler = http.get(`${API_URL}/likes/post/${postResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetLikesResponse)
);

export const testGetLowerLikesHandler = http.get(`${API_URL}/likes/post/${postResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetLowerLikesResponse)
);

export const testGetUsersLikesHandler = http.get(`${API_URL}/users/likes/${postResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetUsersLikesResponse)
);

export const likesHandlers = [
	testAddLikeLikeHandler,
	testRemoveLikeLikeHandler,
	testGetLikesHandler,
	testGetLowerLikesHandler,
	testGetUsersLikesHandler,
];
