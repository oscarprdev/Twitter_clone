import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from '../store';

type StoreState = ReturnType<typeof store.getState>;

export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
