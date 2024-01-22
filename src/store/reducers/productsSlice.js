import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const API_URL = process.env.API_URL


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://cgs.sanjay-chaudhary.com.np/graphql" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "https://cgs.sanjay-chaudhary.com.np/graphql",
                method: "POST",
                body: {
                    query: `{
                        products {
                            pageInfo {
                                endCursor
                                hasNextPage
                                total
                            }
                            nodes{
                                id
                                databaseId
                                name
                                slug
                                type
                                reviewCount
                                image {
                                    mediaItemUrl
                                }
                                ... on SimpleProduct {
                                    price(format: RAW)
                                    regularPrice(format: RAW)
                                    soldIndividually
                                }
                                ... on VariableProduct {
                                    price(format: RAW)
                                    regularPrice(format: RAW)
                                    soldIndividually
                                }
                            }
                        }
                    }`
                }
            }),
            providesTags: ["Product"]
        })
    })
})
export const { useGetProductsQuery } = productsApi
