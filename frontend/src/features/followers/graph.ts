import { API_URL } from '../../constants/constants';
import { AddFollowHttpAdapter } from './adapters/add-follow.http-adapter';
import { GetFollowersHttpAdapter } from './adapters/get-followers.http-adapter';
import { GetFollowingHttpAdapter } from './adapters/get-following.http-adapter';
import { GetUnfollowersHttpAdapter } from './adapters/get-unfollowers.http-adapter';
import { DefaultFollowersInfra } from './infra/followers.infra';
import { DefaultAddFollowUsecase } from './usecases/add-follow/add-follow.usecase';
import { DefaultGetFollowersUsecase } from './usecases/get-followers/get-followers.usecase';
import { DefaultGetFollowingUsecase } from './usecases/get-following/get-following.usecase';
import { DefaultGetUnfollowersUsecase } from './usecases/get-unfollowers/get-unfollowers.usecase';

const followersInfra = new DefaultFollowersInfra(API_URL);

const getFollowersHttpAdapter = new GetFollowersHttpAdapter(followersInfra);
export const getFollowersUsecase = new DefaultGetFollowersUsecase(getFollowersHttpAdapter);

const getFollowingHttpAdapter = new GetFollowingHttpAdapter(followersInfra);
export const getFollowingUsecase = new DefaultGetFollowingUsecase(getFollowingHttpAdapter);

const getUnfollowersHttpAdapter = new GetUnfollowersHttpAdapter(followersInfra);
export const getUnfollowersUsecase = new DefaultGetUnfollowersUsecase(getUnfollowersHttpAdapter);

const addFollowHttpAdapter = new AddFollowHttpAdapter(followersInfra);
export const addFollowUsecase = new DefaultAddFollowUsecase(addFollowHttpAdapter);
