export interface CreateUserInput {
	name: string;
	surname: string;
	username: string;
	password: string;
	email: string;
	file: File | null;
	prevImage: string;
}
