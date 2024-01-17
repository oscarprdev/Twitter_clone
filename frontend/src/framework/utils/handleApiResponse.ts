interface UseApiResponseInput {
	state: 'success' | 'error';
	successCb: () => void;
	errorCb: () => void;
}

export const handleApiResponse = ({ state, successCb, errorCb }: UseApiResponseInput) => {
	if (state === 'success') {
		successCb();
	}

	if (state === 'error') {
		errorCb();
	}
};
