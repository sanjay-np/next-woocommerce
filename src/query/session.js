'use server'
import { fetchQuery } from "@/utils/fetchQuery"

export async function getWoocommerceSession() {	
	const query = {
		query: `{
            cart {
                contents(first: 100) {
                    itemCount
                    nodes {
                        key
                        product {
                            node {
                                id
                            }
                        }
                        variation {
                            attributes {
                                id
                                label
                                name
                                value
                            }
                            node {
                                id
                            }
                        }
                        quantity
                        total
                        subtotal
                        subtotalTax
                        extraData {
                            key
                            value
                        }
                    }
                }
                appliedCoupons {
                    code
                    discountAmount
                    discountTax
                }
                needsShippingAddress
                availableShippingMethods {
                    packageDetails
                    supportsShippingCalculator
                    rates {
                        id
                        instanceId
                        methodId
                        label
                        cost
                    }
                }
                subtotal
                subtotalTax
                shippingTax
                shippingTotal
                total
                totalTax
                feeTax
                feeTotal
                discountTax
                discountTotal
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
        }`
	}
	const response = await fetchQuery(query)
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