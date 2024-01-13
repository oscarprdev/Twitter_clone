export class HttpInfra {
	constructor() {}

	async GET<R>(url: string): Promise<R> {
		try {
			const response = await fetch(url);

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
}
