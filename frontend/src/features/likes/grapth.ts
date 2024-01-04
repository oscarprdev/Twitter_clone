import { API_URL } from '../../constants/constants';
import { GetLikesHttpAdapter } from './adapters/get-likes.http-adapter';
import { DefaultLikesInfra } from './infra/likes.infra';
import { DefaultGetLikesUsecase } from './usecases/get-likes/get-likes.usecase';

const getLikesInfra = new DefaultLikesInfra(API_URL);

const getLikesHttpAdapter = new GetLikesHttpAdapter(getLikesInfra);

export const getLikesUsecase = new DefaultGetLikesUsecase(getLikesHttpAdapter);
