import { HttpResponse, http } from 'msw';
import { server } from '../server/server.mock';

type HandlerMethod = 'GET' | 'POST' | 'DELETE';

export const testHandler = <R>(url: string, method: HandlerMethod, response?: R) => {
	const handlerFn = () => {
		if (response) {
			return HttpResponse.json(response);
		}

		return new HttpResponse(null, { status: 500 });
	};

	switch (method) {
		case 'GET':
			return server.use(http.get(url, handlerFn));
		case 'POST':
			return server.use(http.post(url, handlerFn));
		case 'DELETE':
			return server.use(http.delete(url, handlerFn));
		default:
			return 'A proper http request method should be used';
	}
};
