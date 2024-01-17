import { StateUsecase } from '../../../shared/application/redux.usecase';
import { CreateUserPorts } from './create-user.ports';
import { CreateUserInput } from './create-user.types';

export interface CreateUserUsecase {
	createUser(input: CreateUserInput): Promise<void>;
}

export class DefaultCreateUserUsecase implements CreateUserUsecase {
	constructor(private readonly ports: CreateUserPorts, private readonly stateUsecase: StateUsecase) {}

	async createUser(input: CreateUserInput): Promise<void> {
		try {
			let imageUrl: string = input.prevImage;

			if (input.file) {
				const { url } = await this.ports.uploadImage({ userId: '', file: input.file });

				imageUrl = url;
			}

			const { user } = await this.ports.createUser({
				name: input.name,
				surname: input.surname,
				username: input.username,
				password: input.password,
				email: input.email,
				imageUrl,
			});

			this.stateUsecase.addUser(user);
		} catch (err: unknown) {
			this.stateUsecase.updateErrorState(`Error creating user: ${err}`);
		}
	}
}
