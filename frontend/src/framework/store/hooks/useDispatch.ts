import { useDispatch } from 'react-redux';
import { store } from '../store';

export type StoreDispatch = typeof store.dispatch;

export const useStoreDispatch: () => StoreDispatch = useDispatch;
