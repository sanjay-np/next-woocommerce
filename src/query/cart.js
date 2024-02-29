'use server'
import { fetchQueryWithSession } from "@/utils/fetchQuery"
import { CartContent } from "./fragments/cartFragment"

export async function addToCartFunc(data, wooSession) {
    const query = {
        query: `mutation MyMutation {
            addCartItems(input: {items: {productId: ${data?.productId},${data?.variationQuery !== '' ? data?.variationQuery : ''} quantity: ${data?.quantity}}}) {
                cart {
                    ...CartContent
                }
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, wooSession)
    return response
}
export async function removeCartItem(key, session) {

    const query = {
        query: `mutation MyMutation {
            removeItemsFromCart(input: {keys: "${key}"}){
                cart {
                    ...CartContent
                }
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response?.data
}

export async function updateCartItemsQty(cartItems, session) {
    const query = {
        query: `mutation MyMutation {
            updateItemQuantities(input: {items: [${cartItems}] }) {
                cart {
                    ...CartContent
                }
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response?.data
}

export async function applyCoupon(code, session) {
    const query = {
        query: `mutation MyMutation {
            applyCoupon(input: {code: "${code}"}) {
                cart {
                    ...CartContent
                }
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response
}

export async function removeCoupon(code, session) {
    const query = {
        query: `mutation MyMutation {
            removeCoupons(input: {codes: "${code}"}) {
                cart{
                    ...CartContent
                }
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response
}

export async function updateShippingMethod(method_id, session) {
    const query = {
        query: `mutation MyMutation {
            updateShippingMethod(input: {shippingMethods: "${method_id}"}) {
                cart {
                    ...CartContent
                }
            }
        }
        ${CartContent}
        `
    }
    const response = await fetchQueryWithSession(query, session)
    return response
}