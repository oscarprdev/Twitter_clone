export interface UploadImagePorts {
	uploadImage(input: UploadImagePorts.UploadImageInput): Promise<UploadImagePorts.UploadImageOutput>;
}

export namespace UploadImagePorts {
	export interface UploadImageInput {
		file: File;
		userId: string;
	}

	export interface UploadImageOutput {
		url: string;
	}
}
