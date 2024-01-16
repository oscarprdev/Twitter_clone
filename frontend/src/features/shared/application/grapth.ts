import { store } from '../../../framework/store/store';
import { DefaultReduxUsecase } from './redux.usecase';
import { DefaultStateUsecase } from './state.usecase';

const reduxUsecase = new DefaultReduxUsecase(store.dispatch);
export const stateUsecase = new DefaultStateUsecase(reduxUsecase);
