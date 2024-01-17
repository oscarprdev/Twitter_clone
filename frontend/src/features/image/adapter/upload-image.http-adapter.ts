import { UploadImagePorts } from '../application/upload-image/upload-image.ports';
import { UploadImageInfra } from '../infra/image.infra';

export class UploadImageHttpAdapter implements UploadImagePorts {
	constructor(private readonly cloudflareClient: UploadImageInfra) {}

	async uploadImage({ file, userId }: UploadImagePorts.UploadImageInput): Promise<UploadImagePorts.UploadImageOutput> {
		const { url } = await this.cloudflareClient.uploadImage({ file, userId });

		return { url };
	}
}
