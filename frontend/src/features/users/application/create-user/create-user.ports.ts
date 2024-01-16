import { User } from '../../../shared/domain/types/user';

export interface CreateUserPorts {
	createUser(input: CreateUserPorts.CreateUserInput): Promise<CreateUserPorts.CreateUserOutput>;
	uploadImage(input: CreateUserPorts.UploadImageInput): Promise<CreateUserPorts.UploadImageOutput>;
}

export namespace CreateUserPorts {
	export interface CreateUserInput {
		name: string;
		surname: string;
		username: string;
		password: string;
		email: string;
		imageUrl: string;
	}

	export interface CreateUserOutput {
		user: User;
	}

	export interface UploadImageInput {
		file: File;
		userId: string;
	}

	export interface UploadImageOutput {
		url: string;
	}
}
