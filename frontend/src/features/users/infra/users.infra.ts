import { HttpInfra } from '../../shared/infra/http.infra';
import {
	CreateUserInfraInput,
	CreateUserInfraOutput,
	CreateUserInfraPayload,
	GetAllUsersInfraOutput,
	GetUserByAuthInfraInput,
	GetUserByAuthInfraOutput,
	GetUserByIdPayload,
	GetUserByIdResponse,
	GetUsersBySearchInfraInput,
	GetUsersBySearchInfraResponse,
	LogInInfraInput,
	LogInInfraOutput,
	UpdateUserInfraInput,
	UpdateUserInfraOutput,
	UpdateUserInfraPayload,
} from './users.infra.models';

export interface UsersInfra {
	getUsersBySearch(input: GetUsersBySearchInfraInput): Promise<GetUsersBySearchInfraResponse>;
	getUserById(input: GetUserByIdPayload): Promise<GetUserByIdResponse>;
	updateUser(input: UpdateUserInfraInput): Promise<UpdateUserInfraOutput>;
	createUser(input: CreateUserInfraInput): Promise<CreateUserInfraOutput>;
	getAllUsers(): Promise<GetAllUsersInfraOutput>;
	getUserByAuth(input: GetUserByAuthInfraInput): Promise<GetUserByAuthInfraOutput>;
	logIn(input: LogInInfraInput): Promise<LogInInfraOutput>;
}

export class DefaultUsersInfra extends HttpInfra implements UsersInfra {
	constructor(private readonly API_URL: string) {
		super();
	}

	async getUsersBySearch({ searchValue }: GetUsersBySearchInfraInput): Promise<GetUsersBySearchInfraResponse> {
		const url = `${this.API_URL}/users/search/${searchValue}`;

		return await this.GET<GetUsersBySearchInfraResponse>(url);
	}

	async getUserById({ userId }: GetUserByIdPayload): Promise<GetUserByIdResponse> {
		const url = `${this.API_URL}/users/${userId}`;

		return await this.GET<GetUserByIdResponse>(url);
	}

	async updateUser({ userId, name, surname, profileImgUrl }: UpdateUserInfraInput): Promise<UpdateUserInfraOutput> {
		const url = `${this.API_URL}/users/${userId}`;
		const payload = {
			name,
			surname,
			profileImgUrl,
		};

		return await this.PUT<UpdateUserInfraOutput, UpdateUserInfraPayload>(url, payload);
	}

	async createUser({ name, surname, email, username, password, profileImgUrl }: CreateUserInfraInput): Promise<CreateUserInfraOutput> {
		const url = `${this.API_URL}/users`;
		const payload = {
			name,
			surname,
			email,
			password,
			username,
			profileImgUrl,
			profileBgImgUrl: '',
		};

		return await this.POST<CreateUserInfraOutput, CreateUserInfraPayload>(url, payload);
	}

	async getAllUsers(): Promise<GetAllUsersInfraOutput> {
		const url = `${this.API_URL}/users`;

		return await this.GET<GetAllUsersInfraOutput>(url);
	}

	async getUserByAuth({ jwt }: GetUserByAuthInfraInput): Promise<GetUserByAuthInfraOutput> {
		const url = `${this.API_URL}/users/auth`;
		const headers = {
			Authorization: jwt,
		};

		return await this.GET<GetUserByAuthInfraOutput>(url, headers);
	}

	async logIn({ email, password }: LogInInfraInput): Promise<LogInInfraOutput> {
		const url = `${this.API_URL}/users/login`;
		const payload = { email, password };

		return await this.POST<LogInInfraOutput, LogInInfraInput>(url, payload);
	}
}
