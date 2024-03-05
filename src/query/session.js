'use server'
import { fetchQuery, fetchQueryWithSession } from "@/utils/fetchQuery"
import { CartContent } from "./fragments/cartFragment"

export async function getWoocommerceSession() {
    const query = {
        query: `{
            cart {
                ...CartContent
            }
            customer{
                id
                sessionToken
                firstName
                shipping {
                    postcode
                    state
                    city
                    country
                }
                checkoutUrl
                accountUrl
                displayName
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQuery(query)
    return response?.data
}
export async function getWoocommerceSessionByToken(session) {
    const query = {
        query: `{
            cart {
                ...CartContent
            }
            customer{
                id
                sessionToken
                firstName
                shipping {
                    postcode
                    state
                    city
                    country
                }
                checkoutUrl
                accountUrl
                displayName
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response?.data
}


export async function loginFunc(data, session) {
	const query = {
		query: `mutation login {
			login(input: {password: "${data?.password}", username: "${data?.email}"}) {
				authToken
				refreshToken
				customer {
                    id
                    sessionToken
                    firstName
                    shipping {
                        postcode
                        state
                        city
                        country
                    }
                    checkoutUrl
                    accountUrl
                    displayName
				}
			}
		}`
	}
	const response = await fetchQueryWithSession(query, session)
	return response
}