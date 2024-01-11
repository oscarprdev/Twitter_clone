import { API_URL } from '../../constants/constants';
import { AddFollowHttpAdapter } from './adapters/add-follow.http-adapter';
import { GetUnfollowersHttpAdapter } from './adapters/get-unfollowers.http-adapter';
import { DefaultFollowersInfra } from './infra/followers.infra';
import { DefaultAddFollowUsecase } from './usecases/add-follow/add-follow.usecase';
import { DefaultGetUnfollowersUsecase } from './usecases/get-unfollowers/get-unfollowers.usecase';

const followersInfra = new DefaultFollowersInfra(API_URL);

const getUnfollowersHttpAdapter = new GetUnfollowersHttpAdapter(followersInfra);
export const getUnfollowersUsecase = new DefaultGetUnfollowersUsecase(getUnfollowersHttpAdapter);

const addFollowHttpAdapter = new AddFollowHttpAdapter(followersInfra);
export const addFollowUsecase = new DefaultAddFollowUsecase(addFollowHttpAdapter);
