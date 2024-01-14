export interface UploadImageInfraPayload {
	file: File;
	userId: string;
}

export interface UploadImageInfraResponse {
	url: string;
}
