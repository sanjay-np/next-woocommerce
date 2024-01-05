import { fetchQuery } from "@/utils/fetchQuery"

export async function fetchProducts(count, sort='ASC'){
    count = count + 1;
    const query = {
        query: `{
            products(first: ${count}, where: {orderby: {field: DATE, order: ${sort} }}) {
                edges {
                    node {
                        id
                        slug
                        sku
                        type
                        ... on SimpleProduct {
                            id
                            title(format: RENDERED)
                            price(format: RAW)
                            regularPrice(format: RAW)
                            reviewCount
                            featuredImage {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                        ... on VariableProduct {
                            id
                            title(format: RENDERED)
                            price(format: RAW)
                            reviewCount
                            featuredImage {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            }
        }`
    }
    const response  = await fetchQuery(query)
    return  response?.data?.products?.edges
}

export async function fetchProduct(slug){
    const query = {
        query: `{
            product(id: "${slug}", idType: SLUG) {
                id
                content(format: RENDERED)
                shortDescription
                galleryImages(first: 100) {
                    edges {
                        node {
                            id
                            mediaItemUrl
                        }
                    }
                }
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
                sku
                title
                slug
                reviewCount
                ... on SimpleProduct {
                    id
                    name
                    price(format: RAW)
                }
            }
        }`
    }
    const response  = await fetchQuery(query)
    return  response?.data?.product    
}

export async function fetchProductByCategory(slug){
    const query = {
        query: `
        {
            productCategory(id: "${slug}", idType: SLUG) {
                id
                name
                products(first: 100) {
                    edges {
                        node {
                            id
                            slug
                            sku
                            type
                            ... on SimpleProduct {
                                id
                                title(format: RENDERED)
                                price(format: RAW)
                                regularPrice(format: RAW)
                                reviewCount
                                featuredImage {
                                    node {
                                        mediaItemUrl
                                    }
                                }
                            }
                            ... on VariableProduct {
                                id
                                title(format: RENDERED)
                                price(format: RAW)
                                reviewCount
                                featuredImage {
                                    node {
                                        mediaItemUrl
                                    }
                                }
                            }
                        } 
                    }
                }
            }
        }`
    }
    const response  = await fetchQuery(query)
    return  response?.data?.productCategory
}