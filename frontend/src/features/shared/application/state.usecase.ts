import { User } from '../domain/types/user';
import { ReduxUsecase } from './redux.usecase';

export interface StateUsecase {
	updateUserLogged(user: User): void;
	updateErrorState(error: string): void;
}

export class DefaultStateUsecase implements StateUsecase {
	constructor(private readonly state: ReduxUsecase) {}

	updateUserLogged(user: User): void {
		this.state.updateUserLogged(user);
	}

	updateErrorState(error: string): void {
		this.state.updateErrorState(error);
	}
}
