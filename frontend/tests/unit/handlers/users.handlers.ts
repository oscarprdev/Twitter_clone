import { HttpResponse, http } from 'msw';
import { API_URL } from '../../../src/features/shared/domain/constants/constants';
import { SuccessfulSearchUsersEmptyResponse, SuccessfulSearchUsersResponse } from '../responses/users/search-users.response';
import { SuccessfulUserLoggedResponse } from '../responses/users/user-logged-response';

export const testSearchMockUserHandler = http.get(`${API_URL}/users/search/mock`, () => HttpResponse.json(SuccessfulSearchUsersResponse));

export const testSearchMockUserEmptyHandler = http.get(`${API_URL}/users/search/mock`, () =>
	HttpResponse.json(SuccessfulSearchUsersEmptyResponse)
);

export const testUserLoggedHandler = http.post(`${API_URL}/users/login`, () => HttpResponse.json(SuccessfulUserLoggedResponse));

export const usersHandler = [testSearchMockUserHandler, testSearchMockUserEmptyHandler, testUserLoggedHandler];
