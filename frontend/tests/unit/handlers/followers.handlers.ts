import { HttpResponse, http } from 'msw';
import { API_URL } from '../../../features/shared/domain/constants/constants';
import { userLoggedTestResponse } from '../responses/users.response';
import { SuccessfulGetUnfollowersEmptyResponse, SuccessfulGetUnfollowersResponse } from '../responses/follows/get-unfollowers.response';
import { SuccessfulAddFollowResponse } from '../responses/follows/add-follower.response';
import { SuccessfulGetFollowersResponse } from '../responses/follows/get-followers.response';
import { SuccessfulGetFollowingsResponse } from '../responses/follows/get-followings.response';
import { SuccessfulRemoveFollowerResponse } from '../responses/follows/remove-follower.response';

export const testGetFollowersHandler = http.get(`${API_URL}/followers/${userLoggedTestResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetFollowersResponse)
);

export const testGetFollowingsHandler = http.get(`${API_URL}/followings/${userLoggedTestResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetFollowingsResponse)
);

export const testGetUnfollowersHandler = http.get(`${API_URL}/unfollowers/${userLoggedTestResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetUnfollowersResponse)
);

export const testGetUnfollowersEmptyHandler = http.get(`${API_URL}/unfollowers/${userLoggedTestResponse.id}`, () =>
	HttpResponse.json(SuccessfulGetUnfollowersEmptyResponse)
);

export const testAddFollowerHandler = http.post(`${API_URL}/follower`, () => HttpResponse.json(SuccessfulAddFollowResponse));

export const testRemoveFollowerHandler = http.delete(`${API_URL}/follower`, () => HttpResponse.json(SuccessfulRemoveFollowerResponse));

export const followersHandlers = [
	testGetFollowersHandler,
	testGetFollowingsHandler,
	testGetUnfollowersHandler,
	testAddFollowerHandler,
	testRemoveFollowerHandler,
];
