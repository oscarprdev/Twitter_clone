import { User } from '../domain/types/user';
import { updateUserLogged } from '../../../framework/store/slices/users-slice';
import { showError } from '../../../framework/store/slices/error-slice';
import { StoreDispatch } from '../../../framework/store/hooks/useDispatch';

export interface ReduxUsecase {
	updateUserLogged(user: User): void;
	updateErrorState(error: string): void;
}

export class DefaultReduxUsecase implements ReduxUsecase {
	constructor(private readonly dispatch: StoreDispatch) {}

	updateUserLogged(user: User): void {
		this.dispatch(updateUserLogged({ user }));
	}

	updateErrorState(error: string): void {
		this.dispatch(showError({ errorMessage: error }));
	}
}
