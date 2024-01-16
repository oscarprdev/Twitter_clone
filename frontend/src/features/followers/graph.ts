import { API_URL } from '../shared/domain/constants/constants';
import { AddFollowHttpAdapter } from './adapters/add-follow.http-adapter';
import { GetFollowersHttpAdapter } from './adapters/get-followers.http-adapter';
import { GetFollowingHttpAdapter } from './adapters/get-following.http-adapter';
import { GetUnfollowersHttpAdapter } from './adapters/get-unfollowers.http-adapter';
import { DefaultFollowersInfra } from './infra/followers.infra';
import { DefaultAddFollowUsecase } from './application/add-follow/add-follow.usecase';
import { DefaultGetFollowersUsecase } from './application/get-followers/get-followers.usecase';
import { DefaultGetFollowingUsecase } from './application/get-following/get-following.usecase';
import { DefaultGetUnfollowersUsecase } from './application/get-unfollowers/get-unfollowers.usecase';
import { RemoveFollowHttpAdapter } from './adapters/remove-follow.http-adapter';
import { DefaultRemoveFollowUsecase } from './application/remove-follow/remove-follow.usecase';
import { stateUsecase } from '../shared/application/grapth';

const followersInfra = new DefaultFollowersInfra(API_URL);

const getFollowersHttpAdapter = new GetFollowersHttpAdapter(followersInfra);
export const getFollowersUsecase = new DefaultGetFollowersUsecase(getFollowersHttpAdapter);

const getFollowingHttpAdapter = new GetFollowingHttpAdapter(followersInfra);
export const getFollowingUsecase = new DefaultGetFollowingUsecase(getFollowingHttpAdapter);

const getUnfollowersHttpAdapter = new GetUnfollowersHttpAdapter(followersInfra);
export const getUnfollowersUsecase = new DefaultGetUnfollowersUsecase(getUnfollowersHttpAdapter, stateUsecase);

const addFollowHttpAdapter = new AddFollowHttpAdapter(followersInfra);
export const addFollowUsecase = new DefaultAddFollowUsecase(addFollowHttpAdapter);

const removeFollowHttpAdapter = new RemoveFollowHttpAdapter(followersInfra);
export const removeFollowUsecase = new DefaultRemoveFollowUsecase(removeFollowHttpAdapter, stateUsecase);
