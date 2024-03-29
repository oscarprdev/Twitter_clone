import { API_URL } from '../shared/domain/constants/constants';
import { AddPostHttpAdapter } from './adapters/add-post.http-adapter';
import { GetPostsByUserHttpAdapter } from './adapters/get-posts-by-user.http-adapter';
import { GetPostsHttpAdapter } from './adapters/get-posts.http-adapter';
import { DefaultPostInfra } from './infra/post.infra';
import { DefaultAddPostUsecase } from './application/add-post/add-post.usecase';
import { DefaultGetPostsByUserUsecase } from './application/get-posts-by-user/get-posts-by-user.usecase';
import { DefaultGetPostsUsecase } from './application/get-posts/get-posts.usecase';
import { uploadImageUsecaseAdapter } from '../shared/adapters/grapth';
import { reduxUsecase } from '../shared/application/grapth';

const postInfra = new DefaultPostInfra(API_URL);

const getPostHttpAdapter = new GetPostsHttpAdapter(postInfra);
export const getPostsUsecase = new DefaultGetPostsUsecase(getPostHttpAdapter, reduxUsecase);

const getPostsByUserHttpAdapter = new GetPostsByUserHttpAdapter(postInfra);
export const getPostsByUserUsecase = new DefaultGetPostsByUserUsecase(getPostsByUserHttpAdapter, reduxUsecase);

const addPostHttpAdapter = new AddPostHttpAdapter(postInfra, uploadImageUsecaseAdapter);
export const addPostUsecase = new DefaultAddPostUsecase(addPostHttpAdapter, reduxUsecase);
