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