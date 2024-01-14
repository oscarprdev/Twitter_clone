import { UploadImagePorts } from './upload-image.ports';
import { UploadImagesInput, UploadImagesUsecaseOutput } from './upload-image.types';

export interface UploadImageUsecase {
	uploadImage(input: UploadImagesInput): Promise<UploadImagesUsecaseOutput>;
}

export class DefaultUploadImageUsecase implements UploadImageUsecase {
	constructor(private readonly ports: UploadImagePorts) {}

	async uploadImage({ file, userId }: UploadImagesInput): Promise<UploadImagesUsecaseOutput> {
		try {
			const { url } = await this.ports.uploadImage({ file, userId });

			return {
				url,
				state: 'success',
			};
		} catch (err: unknown) {
			return {
				error: `Error uploading image: ${err}`,
				state: 'error',
			};
		}
	}
}
