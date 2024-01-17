import { uploadImageUsecase } from '../../image/graph';
import { DefaultUploadImageUsecaseAdapter } from './upload-image.usecase-adapter';

export const uploadImageUsecaseAdapter = new DefaultUploadImageUsecaseAdapter(uploadImageUsecase);
