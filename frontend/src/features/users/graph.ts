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
import { LogInHttpAdapter } from './adapters/log-in.http-dapter';
import { DefaultLogInUsecase } from './application/log-in/log-in.usecase';
import { GetAllUsersHttpAdapter } from './adapters/get-all-users.http-adapter';
import { DefaultGetAllUsersUsecase } from './application/get-all-users/get-all-users.usecase';
import { GetUserAuthHttpAdapter } from './adapters/get-user-auth.http-adapter';
import { DefaultGetUserAuthUsecase } from './application/get-user-auth/get-user-auth.usecase';
import { reduxUsecase } from '../shared/application/grapth';

const usersInfra = new DefaultUsersInfra(API_URL);

const searchUsersHttpAdapter = new SearchUsersHttpAdapter(usersInfra);
export const searchUsersUsecase = new DefaultSearchUsersUsecase(searchUsersHttpAdapter);

const updateUserHttpAdapter = new UpdateUserHttpAdapter(usersInfra, uploadImageUsecaseAdapter);
export const updateUserUsecase = new DefaultUpdateUserUsecase(updateUserHttpAdapter, reduxUsecase);

const getUserHttpAdapter = new GetUserHttpAdapter(usersInfra);
export const getUserUsecase = new DefaultGetUserUsecase(getUserHttpAdapter, reduxUsecase);

const createUserHttpAdapter = new CreateUserHttpAdapter(usersInfra, uploadImageUsecaseAdapter);
export const createUserUsecase = new DefaultCreateUserUsecase(createUserHttpAdapter, reduxUsecase);

const getAllUsersAdapter = new GetAllUsersHttpAdapter(usersInfra);
export const getAllUsersUsecase = new DefaultGetAllUsersUsecase(getAllUsersAdapter);

const getUserAuthHttpAdapter = new GetUserAuthHttpAdapter(usersInfra);
export const getUserAuthUsecase = new DefaultGetUserAuthUsecase(getUserAuthHttpAdapter, reduxUsecase);

const logInHttpAdapter = new LogInHttpAdapter(usersInfra);
export const loginUsecase = new DefaultLogInUsecase(logInHttpAdapter, reduxUsecase);
