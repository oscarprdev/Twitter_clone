import { store } from '../../../framework/store/store';
import { DefaultReduxUsecase } from './redux.usecase';

export const reduxUsecase = new DefaultReduxUsecase(store.dispatch);
