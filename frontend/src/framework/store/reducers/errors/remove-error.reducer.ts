import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { ErrorSliceState } from '../../slices/error-slice';
import { ErrorReducerPayload } from './errors.reducer.types';

export const removeErrorReducer = (_: Draft<ErrorSliceState>, action: PayloadAction<ErrorReducerPayload>) => {
	return {
		errorMessage: action.payload.errorMessage,
	};
};
