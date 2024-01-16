import { CreateUserPorts } from './create-user.ports';
import { CreateUserInput, CreateUserOutput } from './create-user.types';

export interface CreateUserUsecase {
	createUser(input: CreateUserInput): Promise<CreateUserOutput>;
}

export class DefaultCreateUserUsecase implements CreateUserUsecase {
	constructor(private readonly ports: CreateUserPorts) {}

	async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
		try {
			let imageUrl: string = input.prevImage;

			if (input.file) {
				const { url } = await this.ports.uploadImage({ userId: '', file: input.file });

				console.log(url);

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

			console.log(user);

			return {
				state: 'success',
				user,
			};
		} catch (err: unknown) {
			return {
				error: `Error creating user: ${err}`,
				state: 'error',
			};
		}
	}
}
