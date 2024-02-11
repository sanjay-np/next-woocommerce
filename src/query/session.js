'use server'
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

export async function loginFunc(data) {
    const query = {
        query: `mutation login {
			login(input: {password: "${data?.password}", username: "${data?.email}"}) {
			  	sessionToken
			  	refreshToken			  	
			}
		}`
    }
    const response = await fetchQuery(query)
    return response
}