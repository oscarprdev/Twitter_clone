import { API_URL } from '../shared/constants/constants';
import { GetLikesHttpAdapter } from './adapters/get-likes.http-adapter';
import { ToggleLikeHttpAdapter } from './adapters/toggle-like.http-adapter';
import { DefaultLikesInfra } from './infra/likes.infra';
import { DefaultGetLikesUsecase } from './usecases/get-likes/get-likes.usecase';
import { DefaultToggleLikeUsecase } from './usecases/toggle-like/toggle-like.usecase';

const likesInfra = new DefaultLikesInfra(API_URL);

const getLikesHttpAdapter = new GetLikesHttpAdapter(likesInfra);
const toggleLikeHttpAdapter = new ToggleLikeHttpAdapter(likesInfra);

export const getLikesUsecase = new DefaultGetLikesUsecase(getLikesHttpAdapter);
export const toggleLikeUsecase = new DefaultToggleLikeUsecase(toggleLikeHttpAdapter);
