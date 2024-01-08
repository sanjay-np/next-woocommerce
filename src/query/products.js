import { fetchQuery } from "@/utils/fetchQuery"

export async function fetchProducts(count, filterQuery = '') {
	const query = {
		query: `{
				products(first: ${count}, ${filterQuery}) {
						edges {
								node {
										id
										slug
										sku
										type
										reviewCount
										... on SimpleProduct {
												id
												title(format: RENDERED)
												price(format: RAW)
												regularPrice(format: RAW)
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
	const response = await fetchQuery(query)
	return response?.data?.products?.edges
}

export async function fetchProduct(slug) {
	const query = {
		query: `{
		product(id: "${slug}", idType: SLUG) {
				id
				content(format: RENDERED)
				shortDescription
				sku
				slug
				title
				type
				reviewCount
				featuredImage {
						node {
							mediaItemUrl
						}
				}
				galleryImages(first: 100) {
						edges {
								node {
										id
										mediaItemUrl
								}
						}
				}
				... on SimpleProduct {
						id
						name
						price(format: RAW)
						regularPrice(format: RAW)
						productCategories {
								edges {
										node {
												id
												name
												slug
										}
								}
						}
				}
				... on VariableProduct {
						id
						name
						price(format: RAW)
						productCategories {
								edges {
										node {
												id
												name
												slug
										}
								}
						}
						regularPrice(format: RAW)
								attributes {
										edges {
												node {
														name
														label
														options
												}
										}
								}
								variations {
										nodes {
												databaseId
												name
												price
												sku
												slug
												featuredImage {
														node {
															mediaItemUrl
														}
												}
												attributes {
														nodes {
															id
															name
															label
															value
														}
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

export async function fetchProductsByCategory(slug) {
	const query = {
		query: `{
				productCategory(id: "${slug}", idType: SLUG) {
						id
						name
				}
				products(where: {categoryIn: "${slug}"}) {
						edges {
								node {
										id
										slug
										sku
										type
										reviewCount
										... on SimpleProduct {
												id
												title(format: RENDERED)
												price(format: RAW)
												regularPrice(format: RAW)
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
	const response = await fetchQuery(query)
	return response?.data
}

export async function fetchProductCategories() {
	const query = {
		query: `{
				productCategories {
						edges {
								node {
										id
										name
										slug
								}
						}
				}
		}`
	}
	const response = await fetchQuery(query)
	return response?.data?.productCategories?.edges
}