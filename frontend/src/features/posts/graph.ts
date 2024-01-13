import { API_URL } from '../shared/domain/constants/constants';
import { AddPostHttpAdapter } from './adapters/add-post.http-adapter';
import { GetPostsByUserHttpAdapter } from './adapters/get-posts-by-user.http-adapter';
import { GetPostsHttpAdapter } from './adapters/get-posts.http-adapter';
import { DefaultPostInfra } from './infra/post.infra';
import { DefaultAddPostUsecase } from './usecases/add-post/add-post.usecase';
import { DefaultGetPostsByUserUsecase } from './usecases/get-posts-by-user/get-posts-by-user.usecase';
import { DefaultGetPostsUsecase } from './usecases/get-posts/get-posts.usecase';

const postInfra = new DefaultPostInfra(API_URL);

const getPostHttpAdapter = new GetPostsHttpAdapter(postInfra);
export const getPostsUsecase = new DefaultGetPostsUsecase(getPostHttpAdapter);

const getPostsByUserHttpAdapter = new GetPostsByUserHttpAdapter(postInfra);
export const getPostsByUserUsecase = new DefaultGetPostsByUserUsecase(getPostsByUserHttpAdapter);

const addPostHttpAdapter = new AddPostHttpAdapter(postInfra);
export const addPostUsecase = new DefaultAddPostUsecase(addPostHttpAdapter);
