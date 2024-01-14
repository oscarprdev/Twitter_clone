import { CLOUDFLARE_API } from '../shared/domain/constants/constants';
import { UploadImageHttpAdapter } from './adapter/upload-image.http-adapter';
import { DefaultUploadImageUsecase } from './application/upload-image/upload-image.usecase';
import { DefaultUploadImageInfra } from './infra/image.infra';

const imageInfra = new DefaultUploadImageInfra(CLOUDFLARE_API);
const uploadImageClouflareAdapter = new UploadImageHttpAdapter(imageInfra);
export const uploadImageUsecase = new DefaultUploadImageUsecase(uploadImageClouflareAdapter);
