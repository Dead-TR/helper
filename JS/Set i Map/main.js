const f = (element, callback) => {
	setTimeout(() => callback(element), 2000)

	return String(element).split('').sort((a, b) => b-a)
}

const g = f(845, (a) => {
	let arr = String(a).split('');
	const result = [];

	while (arr.length > 1) {
		arr = arr.reduce((a, b) => a*b);
		result.push(arr);
		arr = String(arr).split('')
	}
	console.log("result", result);
})

console.log("g", g, 'operation end');

