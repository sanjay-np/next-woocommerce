'use server'
import { fetchQuery } from "@/utils/fetchQuery"

export async function fetchProducts(first, after, where = '') {
	const query = {
		query: `{
			products(first: ${first}, after:"${after}",where:{ ${where} }) {
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
	const response = await fetchQuery(query)
	return response?.data?.products
}

export async function fetchProduct(slug) {
	const query = {
		query: `{
			product(id: "${slug}", idType: SLUG) {
				id
				databaseId
				slug
				name
				type
				description
				shortDescription(format: RAW)
				reviewCount
				image {
					id
					mediaItemUrl
				}
				galleryImages {
					nodes {
						id
						mediaItemUrl
					}
				}
				productTags(first: 20) {
					nodes {
						id
						slug
						name
					}
				}
				productCategories {
					nodes {
						name
						slug
						id
						databaseId
					}
				}
				attributes {
					nodes {
						id
						attributeId
						... on LocalProductAttribute {
							name
							label
							options
							variation
						}
						... on GlobalProductAttribute {
							name
							label
							options
							variation
							slug
							terms(first: 100) {
								nodes {
									id
									name
									slug
								}
							}
						}
					}
				}
				... on SimpleProduct {
					onSale
					stockStatus
					price(format: RAW)
					rawPrice: price(format: RAW)
					regularPrice(format: RAW)
					salePrice(format: RAW)
					stockStatus
					stockQuantity
					soldIndividually
					defaultAttributes(first: 100) {
						nodes {
							id
							attributeId
							name
							value
							label
						}
					}
				}
				... on VariableProduct {
					onSale
					price(format: RAW)
					rawPrice: price(format: RAW)
					regularPrice
					salePrice
					stockStatus
					stockQuantity
					soldIndividually
					defaultAttributes(first: 100) {
						nodes {
							id
							attributeId
							label
							name
							value
						}
					}
					variations(first: 50) {
						nodes {
							id
							databaseId
							name
							price
							rawPrice: price(format: RAW)
							regularPrice
							salePrice
							onSale
							attributes {
								nodes {
									name
									label
									value
								}
							}
							image {
								id
								sourceUrl
								altText
							}
						}
					}
				}
			}
		}`
	}
	const response = await fetchQuery(query)
	return response?.data?.product
}
export async function fetchProductCategories(first, after = '') {
	const query = {
		query: `{
			productCategories(first: ${first}, after: "${after}", where: {exclude: 15, childless: true}) {
				pageInfo {
					hasNextPage
					endCursor
				}
				nodes {
					id
					name
					slug
				}
			}
		}`
	}
	const response = await fetchQuery(query)
	return response?.data?.productCategories
}
export async function fetchProductCategory(slug) {
	const query = {
		query: `{
			productCategory(id: "${slug}", idType: SLUG) {
				id
				name
				slug
			}
		}`
	}
	const response = await fetchQuery(query)
	return response?.data?.productCategory
}

export async function fetchProductColors() {
	const query = {
		query: `{
			allPaColor{
				nodes {
					databaseId
					name
					slug
				}
			}
		}`
	}
	const response = await fetchQuery(query)
	return response?.data?.allPaColor?.nodes
}

export async function fetchProductSizes() {
	const query = {
		query: `{
			allPaSize {
				nodes {
					id
					name
					slug
				}
			}
		}`
	}
	const response = await fetchQuery(query)
	return response?.data?.allPaSize?.nodes
}

export async function searchProducts(searchTxt) {
	const query = {
		query: `{
			products(where: {search: "${searchTxt}"}) {
			  	edges {
					node {
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
			}
		}`
	}
	const response = await fetchQuery(query)
	return response
}
