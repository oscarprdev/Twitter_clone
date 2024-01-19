import { API_URL } from '../../../features/shared/domain/constants/constants';
import { SuccessfulAddPostResponse } from '../responses/posts/add-post.responses';
import {
	SuccessfulGetMorePostsResponse,
	SuccessfulGetPostsEmptyResponse,
	SuccessfulGetPostsResponse,
} from '../responses/posts/get-posts.responses';
import { HttpResponse, http } from 'msw';
import { userTestResponse } from '../responses/users.response';
import { SuccessfulGetPostsByUserResponse } from '../responses/posts/get-posts-by-user.responses';

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
