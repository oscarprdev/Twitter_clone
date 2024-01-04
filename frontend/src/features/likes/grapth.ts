import { API_URL } from '../../constants/constants';
import { GetLikesHttpAdapter } from './adapters/get-likes.http-adapter';
import { DefaultGetLikesInfra } from './infra/get-likes.infra';
import { DefaultGetLikesUsecase } from './usecases/get-likes.usecase';

const getLikesInfra = new DefaultGetLikesInfra(API_URL);

const getLikesHttpAdapter = new GetLikesHttpAdapter(getLikesInfra);

export const getLikesUsecase = new DefaultGetLikesUsecase(getLikesHttpAdapter);
