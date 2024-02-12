export function productPrice(input) {
	if (!input.includes(',')) {
		const floatValue = parseFloat(input);
		if (isNaN(floatValue)) {
			return input;
		}
		return floatValue.toFixed(2);
	}
	const numbers = input.split(',')?.map(Number);
	const min = Math.min(...numbers).toFixed(2);
	const max = Math.max(...numbers).toFixed(2);
	const price = `${min} - ` + '$' + ` ${max}`
	return price;
}

export function filterQueryBuilder(filter) {
	let query = ''
	if (filter?.priceRange?.length > 0) {
		query += `minPrice:${filter?.priceRange[0]}, maxPrice:${filter?.priceRange[1]},`
	}
	if (filter?.category?.length > 0 || filter?.size?.length > 0) {
		let taxonomies = [];

		if (filter?.category?.length > 0) {
			filter?.category?.map((item, index) => {
				taxonomies.push(`{ taxonomy: PRODUCT_CAT, terms: "${item}" }`)
			})
		}
		if (filter?.size?.length > 0) {
			filter?.size?.map((item, index) => {
				taxonomies.push(`{ taxonomy: PA_SIZE, terms: "${item}" }`)
			})
		}
		query += `taxonomyFilter: {relation: AND, filters: [${taxonomies}]},`
	}
	return query
}