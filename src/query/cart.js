'use server'
import { fetchQueryWithSession } from "@/utils/fetchQuery"

export async function addToCartFunc(data, wooSession) {
    const query = {
        query: `mutation MyMutation {
            addCartItems(input: {items: {productId: ${data?.productId},${data?.variationQuery !== '' ? data?.variationQuery : ''} quantity: ${data?.quantity}}}) {
                cart {
                    contents(first: 100) {
                        itemCount
                        nodes {
                            key
                            product {
                                node {
                                    id
                                    databaseId
                                    name
                                    slug
                                    type
                                    image {
                                        id
                                        sourceUrl(size:WOOCOMMERCE_THUMBNAIL)
                                        altText
                                    }
                                    ... on SimpleProduct {
                                        price
                                        regularPrice
                                        soldIndividually
                                    }
                                    ... on VariableProduct {
                                        price
                                        regularPrice
                                        soldIndividually
                                    }
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
                                    databaseId
                                    name
                                    slug
                                    image {
                                        id
                                        sourceUrl(size:WOOCOMMERCE_THUMBNAIL)
                                        altText
                                    }
                                    price
                                    regularPrice
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
            }
        }`
    }
    const response = await fetchQueryWithSession(query, wooSession)
    return response?.data
}
export async function removeCartItem(key, session) {

    const query = {
        query: `mutation MyMutation {
            removeItemsFromCart(input: {keys: "${key}"}){
                cart {
                    contents(first: 100) {
                        itemCount
                        nodes {
                            key
                            product {
                                node {
                                    id
                                    databaseId
                                    name
                                    slug
                                    type
                                    image {
                                        id
                                        sourceUrl(size:WOOCOMMERCE_THUMBNAIL)
                                        altText
                                    }
                                    ... on SimpleProduct {
                                        price
                                        regularPrice
                                        soldIndividually
                                    }
                                    ... on VariableProduct {
                                        price
                                        regularPrice
                                        soldIndividually
                                    }
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
                                    databaseId
                                    name
                                    slug
                                    image {
                                        id
                                        sourceUrl(size:WOOCOMMERCE_THUMBNAIL)
                                        altText
                                    }
                                    price
                                    regularPrice
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
            }
        }`
    }
    const response = await fetchQueryWithSession(query, session)
    return response?.data
}

export async function updateCartItemsQty(cartItems, session) {
    const query = {
        query: `mutation MyMutation {
            updateItemQuantities(input: {items: [${cartItems}] }) {
                cart {
                    contents(first: 100) {
                        itemCount
                        nodes {
                            key
                            product {
                                node {
                                    id
                                    databaseId
                                    name
                                    slug
                                    type
                                    image {
                                        id
                                        sourceUrl(size:WOOCOMMERCE_THUMBNAIL)
                                        altText
                                    }
                                    ... on SimpleProduct {
                                        price
                                        regularPrice
                                        soldIndividually
                                    }
                                    ... on VariableProduct {
                                        price
                                        regularPrice
                                        soldIndividually
                                    }
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
                                    databaseId
                                    name
                                    slug
                                    image {
                                        id
                                        sourceUrl(size:WOOCOMMERCE_THUMBNAIL)
                                        altText
                                    }
                                    price
                                    regularPrice
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
            }
        }`
    }
    const response = await fetchQueryWithSession(query, session)
    return response?.data
}