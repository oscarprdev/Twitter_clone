export class HttpInfra {
	constructor() {}

	async GET<R>(url: string, headers?: Record<string, string>): Promise<R> {
		try {
			const response = await fetch(url, {
				headers: headers instanceof Object ? new Headers(headers) : undefined,
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}

	async POST<R, B>(url: string, body: B): Promise<R> {
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}

	async PUT<R, B>(url: string, body: B): Promise<R> {
		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(body),
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}

	async DELETE<R, B>(url: string, body: B): Promise<R> {
		try {
			const response = await fetch(url, {
				method: 'DELETE',
				body: JSON.stringify(body),
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}

	async GETAUTH<R>(url: string, auth: string): Promise<R> {
		try {
			const response = await fetch(url, {
				headers: {
					Authorization: auth,
				},
			});

			const jsonResponse = await response.json();

			return jsonResponse;
		} catch (error: unknown) {
			throw new Error(`${error}`);
		}
	}
}
