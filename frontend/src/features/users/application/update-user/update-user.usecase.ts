import { StateUsecase } from '../../../shared/application/redux.usecase';
import { UpdateUserPorts } from './update-user.ports';
import { UpdateUserInput } from './update-user.types';

export interface UpdateUserUsecase {
	updateUser(input: UpdateUserInput): Promise<void>;
}

export class DefaultUpdateUserUsecase implements UpdateUserUsecase {
	constructor(private readonly ports: UpdateUserPorts, private readonly stateUsecase: StateUsecase) {}

	private async updateUserWithImage(name: string, surname: string, file: File, userId: string) {
		const { url } = await this.ports.uploadImage({ userId, file });
		return await this.ports.updateUser({ userId, name, surname, image: url });
	}

	async updateUser({ name, surname, file, userId, prevImage }: UpdateUserInput): Promise<void> {
		try {
			if (file) {
				const { user } = await this.updateUserWithImage(name, surname, file, userId);

				this.stateUsecase.updateUserLogged(user);
			} else {
				const { user } = await this.ports.updateUser({ userId, name, surname, image: prevImage });

				this.stateUsecase.updateUserLogged(user);
			}
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error updating user: ${err}`);
		}
	}
}
