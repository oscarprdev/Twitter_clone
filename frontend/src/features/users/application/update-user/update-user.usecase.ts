import { UpdateUserPorts } from './update-user.ports';
import { UpdateUserInput, UpdateUserOutput } from './update-user.types';

export interface UpdateUserUsecase {
	updateUser(input: UpdateUserInput): Promise<UpdateUserOutput>;
}

export class DefaultUpdateUserUsecase implements UpdateUserUsecase {
	constructor(private readonly ports: UpdateUserPorts) {}

	private async updateUserWithImage(name: string, surname: string, file: File, userId: string) {
		const { url } = await this.ports.uploadImage({ userId, file });
		return await this.ports.updateUser({ userId, name, surname, image: url });
	}

	async updateUser({ name, surname, file, userId, prevImage }: UpdateUserInput): Promise<UpdateUserOutput> {
		try {
			if (file) {
				const { user } = await this.updateUserWithImage(name, surname, file, userId);

				return {
					state: 'success',
					user,
				};
			} else {
				const { user } = await this.ports.updateUser({ userId, name, surname, image: prevImage });

				return {
					state: 'success',
					user,
				};
			}
		} catch (err: unknown) {
			return {
				error: `Error updating user: ${err}`,
				state: 'error',
			};
		}
	}
}
