import { createSlice } from '@reduxjs/toolkit';
import { showErrorReducer } from '../reducers/errors/show-error.reducer';
import { removeErrorReducer } from '../reducers/errors/remove-error.reducer';

export interface ErrorSliceState {
	errorMessage: string | null;
}

const initialState: ErrorSliceState = {
	errorMessage: null,
};

export const ErrorsSlice = createSlice({
	name: 'errors',
	initialState,
	reducers: {
		showError: showErrorReducer,
		removeError: removeErrorReducer,
	},
});

export const { showError, removeError } = ErrorsSlice.actions;

export default ErrorsSlice.reducer;
