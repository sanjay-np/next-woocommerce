const API_URL = process.env.API_URL

export async function fetchQuery(query) {
	try {
		const res = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(query),
		})
		const response = await res.json()
		return response
	} catch (error) {
		return error
	}
}