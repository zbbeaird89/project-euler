function findMultiples(num1, num2) {
	var array = [];
	for (var i = 1; i <= 1000; i++) {
		if ((i % num1 === 0) && (i % num2 === 0)) {
			array.push(i);
		} else if (i % num1 === 0) {
			array.push(i);
		} else if (i % num2 === 0) {
			array.push(i);
		}
	}
	return array;
}

function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

console.log(sum(findMultiples(3, 5)));