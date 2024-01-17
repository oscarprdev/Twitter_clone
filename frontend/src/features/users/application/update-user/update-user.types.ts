export interface UpdateUserInput {
	name: string;
	surname: string;
	file: File | null;
	userId: string;
	prevImage: string;
}
