import { fetchQuery } from "@/utils/fetchQuery"

export async function getSessionToken() {
	const query = {
		query: `{
        customer{
					sessionToken
        }
    }`
	}
	const response = await fetchQuery(query)
	return response?.data?.customer?.sessionToken
}