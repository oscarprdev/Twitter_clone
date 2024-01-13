import { API_URL } from '../shared/constants/constants';
import { SearchUsersHttpAdapter } from './adapters/search-users.http-adapter';
import { DefaultUsersInfra } from './infra/users.infra';
import { DefaultSearchUsersUsecase } from './usecases/search-users/search-users.usecase';

const usersInfra = new DefaultUsersInfra(API_URL);

const searchUsersHttpAdapter = new SearchUsersHttpAdapter(usersInfra);
export const searchUsersUsecase = new DefaultSearchUsersUsecase(searchUsersHttpAdapter);
