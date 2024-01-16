import { UploadImageUsecaseAdapter } from '../../shared/adapters/upload-image.usecase-adapter';
import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { UpdateUserPorts } from '../application/update-user/update-user.ports';
import { UsersInfra } from '../infra/users.infra';

export class UpdateUserHttpAdapter implements UpdateUserPorts {
	constructor(private readonly httpClient: UsersInfra, private readonly uploadImageUsecaseAdapter: UploadImageUsecaseAdapter) {}

	async updateUser({ userId, name, surname, image }: UpdateUserPorts.updateUserInput): Promise<UpdateUserPorts.UpdateUserOutput> {
		const dbUserResponse = await this.httpClient.updateUser({ userId, name, surname, profileImgUrl: image });

		return {
			user: mapDbUserToApplication(dbUserResponse.user),
		};
	}

	async uploadImage({ userId, file }: UpdateUserPorts.UploadImageInput): Promise<UpdateUserPorts.UploadImageOutput> {
		return await this.uploadImageUsecaseAdapter.uploadImage({ userId, file });
	}
}
