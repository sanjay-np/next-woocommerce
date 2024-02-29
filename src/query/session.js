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
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response?.data
}


// export async function loginFunc(data) {
// 	const query = {
// 		query: `mutation login {
// 			login(input: {password: "${data?.password}", username: "${data?.email}"}) {
// 				authToken
// 				refreshToken
// 				customer {
// 				  sessionToken
// 				}
// 			}
// 		}`
// 	}
// 	const response = await fetchQuery(query)
// 	return response
// }