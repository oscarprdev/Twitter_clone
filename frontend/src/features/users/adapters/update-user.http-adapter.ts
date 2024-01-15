import { UploadImageUsecase } from '../../image/application/upload-image/upload-image.usecase';
import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { UpdateUserPorts } from '../application/update-user/update-user.ports';
import { UsersInfra } from '../infra/users.infra';

export class UpdateUserHttpAdapter implements UpdateUserPorts {
	constructor(private readonly httpClient: UsersInfra, private readonly uploadImageUsecase: UploadImageUsecase) {}

	async updateUser({ userId, name, surname, image }: UpdateUserPorts.updateUserInput): Promise<UpdateUserPorts.UpdateUserOutput> {
		const dbUserResponse = await this.httpClient.updateUser({ userId, name, surname, image });

		return {
			user: mapDbUserToApplication(dbUserResponse.user),
		};
	}

	async uploadImage({ userId, file }: UpdateUserPorts.UploadImageInput): Promise<UpdateUserPorts.UploadImageOutput> {
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
