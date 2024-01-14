import { HttpResponse, http } from 'msw';
import { API_URL } from '../../../features/shared/domain/constants/constants';
import { SuccessfulSearchUsersEmptyResponse, SuccessfulSearchUsersResponse } from '../responses/users/search-users.response';

export const testSearchMockUserHandler = http.get(`${API_URL}/users/search/mock`, () => HttpResponse.json(SuccessfulSearchUsersResponse));

export const testSearchMockUserEmptyHandler = http.get(`${API_URL}/users/search/mock`, () =>
	HttpResponse.json(SuccessfulSearchUsersEmptyResponse)
);

export const usersHandler = [testSearchMockUserHandler, testSearchMockUserEmptyHandler];
