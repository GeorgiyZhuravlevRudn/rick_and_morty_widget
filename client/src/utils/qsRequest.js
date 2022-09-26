const qs = require('qs');
export const qsFormatting = (data={}) => {
	return qs.stringify({
		...data
	}, {
		encodeValuesOnly: true, // prettify URL
	});
}