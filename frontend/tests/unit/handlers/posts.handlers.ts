import { API_URL } from '../../../src/features/shared/domain/constants/constants';
import { SuccessfulAddPostResponse } from '../../shared/responses/posts/add-post.responses';
import {
	SuccessfulGetMorePostsResponse,
	SuccessfulGetPostsEmptyResponse,
	SuccessfulGetPostsResponse,
} from '../../shared/responses/posts/get-posts.responses';
import { HttpResponse, http } from 'msw';
import { userTestResponse } from '../../shared/responses/users.response';
import { SuccessfulGetPostsByUserResponse } from '../../shared/responses/posts/get-posts-by-user.responses';

export const testGetPostsHandler = http.get(`${API_URL}/posts`, () => HttpResponse.json(SuccessfulGetPostsResponse));

export const testGetMorePostsHandler = http.get(`${API_URL}/posts`, () => HttpResponse.json(SuccessfulGetMorePostsResponse));

export const testGetPostsEmptyHandler = http.get(`${API_URL}/posts`, () => HttpResponse.json(SuccessfulGetPostsEmptyResponse));

export const testAddPostHandler = http.post(`${API_URL}/posts`, () => HttpResponse.json(SuccessfulAddPostResponse));

export const testGetPostsByUserHandler = http.get(`${API_URL}/posts/user/${userTestResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetPostsByUserResponse)
);

export const postsHandler = [
	testGetPostsHandler,
	testGetMorePostsHandler,
	testGetPostsEmptyHandler,
	testAddPostHandler,
	testGetPostsByUserHandler,
];
