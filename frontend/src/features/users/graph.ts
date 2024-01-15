import { API_URL } from '../shared/domain/constants/constants';
import { SearchUsersHttpAdapter } from './adapters/search-users.http-adapter';
import { DefaultUsersInfra } from './infra/users.infra';
import { DefaultSearchUsersUsecase } from './application/search-users/search-users.usecase';
import { UpdateUserHttpAdapter } from './adapters/update-user.http-adapter';
import { DefaultUpdateUserUsecase } from './application/update-user/update-user.usecase';
import { uploadImageUsecase } from '../image/graph';

const usersInfra = new DefaultUsersInfra(API_URL);

const searchUsersHttpAdapter = new SearchUsersHttpAdapter(usersInfra);
export const searchUsersUsecase = new DefaultSearchUsersUsecase(searchUsersHttpAdapter);

const updateUserHttpAdapter = new UpdateUserHttpAdapter(usersInfra, uploadImageUsecase);
export const updateUserUsecase = new DefaultUpdateUserUsecase(updateUserHttpAdapter);
