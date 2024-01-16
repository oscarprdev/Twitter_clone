import { UploadImageUsecase } from '../../image/application/upload-image/upload-image.usecase';
import { UploadImageUsecaseAdapterInput, UploadImageUsecaseAdapterOutput } from './upload-image.usecase-adapter.types';

export interface UploadImageUsecaseAdapter {
	uploadImage({ userId, file }: UploadImageUsecaseAdapterInput): Promise<UploadImageUsecaseAdapterOutput>;
}

export class DefaultUploadImageUsecaseAdapter {
	constructor(private readonly uploadImageUsecase: UploadImageUsecase) {}

	async uploadImage({ userId, file }: UploadImageUsecaseAdapterInput): Promise<UploadImageUsecaseAdapterOutput> {
		const uploadImageResponse = await this.uploadImageUsecase.uploadImage({ userId, file });

		if (uploadImageResponse.state === 'success') {
			return {
				url: uploadImageResponse.url,
			};
		} else {
			throw new Error(uploadImageResponse.error);
		}
	}
}
