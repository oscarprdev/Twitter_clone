import { API_URL } from '../../constants/constants';
import { AddPostHttpAdapter } from './adapters/add-post.http-adapter';
import { DefaultPostInfra } from './infra/post.infra';
import { DefaultAddPostUsecase } from './usecases/add-post/add-post.usecase';

const postInfra = new DefaultPostInfra(API_URL);
const addPostHttpAdapter = new AddPostHttpAdapter(postInfra);
export const addPostUsecase = new DefaultAddPostUsecase(addPostHttpAdapter);
