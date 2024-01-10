import { API_URL } from '../../constants/constants';
import { GetUnfollowersHttpAdapter } from './adapters/get-unfollowers.http-adapter';
import { DefaultFollowersInfra } from './infra/followers.infra';
import { DefaultGetUnfollowersUsecase } from './usecases/get-unfollowers/get-unfollowers.usecase';

const followersInfra = new DefaultFollowersInfra(API_URL);

const getUnfollowersHttpAdapter = new GetUnfollowersHttpAdapter(followersInfra);
export const getUnfollowersUsecase = new DefaultGetUnfollowersUsecase(getUnfollowersHttpAdapter);
