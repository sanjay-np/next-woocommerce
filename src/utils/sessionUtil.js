import { fetchQuery } from "./fetchQuery"

export async function getSessionToken(forceFetch = false) {
    let sessionToken = localStorage.getItem(process.env.SESSION_TOKEN_LS_KEY)
    if (!sessionToken || forceFetch) {
        sessionToken = await fetchSessionToken()
    }
    return sessionToken
}

async function fetchSessionToken() {
    let sessionToken
    try {
        const query = {
            query: `{
                customer {
                    sessionToken
                }
            }`
        }
        const cartData = await fetchQuery(query)
        // If user doesn't have an account return accountNeeded flag.
        sessionToken = cartData?.cart?.sessionToken
        if (!sessionToken) {
            throw new Error("Failed to retrieve a new session token")
        }
    } catch (err) {
        console.error(err)
    }

    return sessionToken
}
