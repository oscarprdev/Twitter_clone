import { API_URL } from '../shared/domain/constants/constants';
import { SearchUsersHttpAdapter } from './adapters/search-users.http-adapter';
import { DefaultUsersInfra } from './infra/users.infra';
import { DefaultSearchUsersUsecase } from './application/search-users/search-users.usecase';
import { UpdateUserHttpAdapter } from './adapters/update-user.http-adapter';
import { DefaultUpdateUserUsecase } from './application/update-user/update-user.usecase';
import { GetUserHttpAdapter } from './adapters/get-user.http-adapter';
import { DefaultGetUserUsecase } from './application/get-user/get-user.usecase';
import { uploadImageUsecaseAdapter } from '../shared/adapters/grapth';
import { CreateUserHttpAdapter } from './adapters/create-user.http-adapter';
import { DefaultCreateUserUsecase } from './application/create-user/create-user.usecase';

const usersInfra = new DefaultUsersInfra(API_URL);

const searchUsersHttpAdapter = new SearchUsersHttpAdapter(usersInfra);
export const searchUsersUsecase = new DefaultSearchUsersUsecase(searchUsersHttpAdapter);

const updateUserHttpAdapter = new UpdateUserHttpAdapter(usersInfra, uploadImageUsecaseAdapter);
export const updateUserUsecase = new DefaultUpdateUserUsecase(updateUserHttpAdapter);

const getUserHttpAdapter = new GetUserHttpAdapter(usersInfra);
export const getUserUsecase = new DefaultGetUserUsecase(getUserHttpAdapter);

const createUserHttpAdapter = new CreateUserHttpAdapter(usersInfra, uploadImageUsecaseAdapter);
export const createUserUsecase = new DefaultCreateUserUsecase(createUserHttpAdapter);
