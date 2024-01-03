import { API_URL } from '../../constants/constants';
import { AddPostHttpAdapter } from './adapters/add-post.http-adapter';
import { GetPostsHttpAdapter } from './adapters/get-posts.http-adapter';
import { DefaultPostInfra } from './infra/post.infra';
import { DefaultAddPostUsecase } from './usecases/add-post/add-post.usecase';
import { DefaultGetPostsUsecase } from './usecases/get-posts/get-posts.usecase';

const postInfra = new DefaultPostInfra(API_URL);

const addPostHttpAdapter = new AddPostHttpAdapter(postInfra);
const getPostHttpAdapter = new GetPostsHttpAdapter(postInfra);

export const addPostUsecase = new DefaultAddPostUsecase(addPostHttpAdapter);
export const getPostsUsecase = new DefaultGetPostsUsecase(getPostHttpAdapter);
