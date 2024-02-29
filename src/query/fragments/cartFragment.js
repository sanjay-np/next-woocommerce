export const ProductContentSlice = `
    fragment ProductContentSlice on Product {
        id
        databaseId
        name
        slug
        type
        image {
            id
            sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
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
`;
export const ProductVariationContentSlice = `
    fragment ProductVariationContentSlice on ProductVariation {
        id
        databaseId
        name
        slug
        image {
            id
            sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
            altText
        }
        price
        regularPrice
    }
`;
export const CartItemContent = `
    fragment CartItemContent on CartItem {
        key
        product {
            node {
                ...ProductContentSlice
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
                ...ProductVariationContentSlice
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
    ${ProductContentSlice}
    ${ProductVariationContentSlice}
`;
export const CartContent = `
    fragment CartContent on Cart {
        contents(first: 100) {
            itemCount
            nodes {
                ...CartItemContent
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
    ${CartItemContent}
`;