function square(n) {
	return n * n;
}

for (let x of [1, 2, 3, 4, 5]) {
	console.log(square(x));
}
// in terminal: node square.js -> 1,4,9,16,25
