import { UploadImageUsecaseAdapter } from '../../shared/adapters/upload-image.usecase-adapter';
import { mapDbUserToApplication } from '../../shared/mappers/map-db-user-to-app';
import { CreateUserPorts } from '../application/create-user/create-user.ports';
import { UsersInfra } from '../infra/users.infra';

export class CreateUserHttpAdapter implements CreateUserPorts {
	constructor(private readonly httpClient: UsersInfra, private readonly uploadImageUsecaseAdapter: UploadImageUsecaseAdapter) {}

	async createUser(input: CreateUserPorts.CreateUserInput): Promise<CreateUserPorts.CreateUserOutput> {
		const { userCreated } = await this.httpClient.createUser({
			name: input.name,
			username: input.username,
			email: input.email,
			surname: input.surname,
			password: input.password,
			profileImgUrl: input.imageUrl,
		});

		return {
			user: mapDbUserToApplication(userCreated),
		};
	}

	async uploadImage({ userId, file }: CreateUserPorts.UploadImageInput): Promise<CreateUserPorts.UploadImageOutput> {
		return await this.uploadImageUsecaseAdapter.uploadImage({ userId, file });
	}
}
