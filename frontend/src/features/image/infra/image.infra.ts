import { UploadImageInfraPayload, UploadImageInfraResponse } from './image.infra.models';

export interface UploadImageInfra {
	uploadImage(input: UploadImageInfraPayload): Promise<UploadImageInfraResponse>;
}

export class DefaultUploadImageInfra implements UploadImageInfra {
	constructor(private readonly API_URL: string) {}

	async uploadImage({ file }: UploadImageInfraPayload): Promise<UploadImageInfraResponse> {
		try {
			const key = `${crypto.randomUUID().toString()}-${file.name}`;
			const contentType = file.type;

			const formData = new FormData();
			formData.append('file', file);
			formData.append('key', key);
			formData.append('type', contentType);

			const response = await fetch(`${this.API_URL}`, {
				method: 'POST',
				body: formData,
			});

			await response.json();

			return {
				url: `https://pub-43949222ba2448cbbff5d5c5019cd5e6.r2.dev/${key}`,
			};
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}
}
