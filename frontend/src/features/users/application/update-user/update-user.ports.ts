import { User } from '../../../shared/domain/types/user';

export interface UpdateUserPorts {
	updateUser(input: UpdateUserPorts.updateUserInput): Promise<UpdateUserPorts.UpdateUserOutput>;
	uploadImage(input: UpdateUserPorts.UploadImageInput): Promise<UpdateUserPorts.UploadImageOutput>;
}

export namespace UpdateUserPorts {
	export interface updateUserInput {
		name: string;
		surname: string;
		image: string;
		userId: string;
	}

	export interface UpdateUserOutput {
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
