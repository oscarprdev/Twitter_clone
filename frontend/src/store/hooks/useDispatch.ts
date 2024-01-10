import { useDispatch } from 'react-redux';
import { store } from '../store';

type StoreDispatch = typeof store.dispatch;

export const useStoreDispatch: () => StoreDispatch = useDispatch;
