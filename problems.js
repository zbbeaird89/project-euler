/**************************************
SCRIPTS
**************************************/
function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}


//find multiples of 3 or 5
//the sum of those multiples must be below 1000


//Multiples of 3 and 5
function sumMultiples(a, b) {
	var total   = 0;
	for (var i = 1; (total + i) < 1000; i++) {
		if (i % a === 0 || i % b === 0) {
			total += i;
		}
	}
	return total;
}


//Even Fibonacci numbers
function evenFib() {
	var array = [1, 2];
	function fibSeq() {
		var next = array[array.length - 2] + array[array.length - 1];
		if (next <= 4000000) {
			array.push(next);
			fibSeq();
		}
	}
	function evenNums(num) {
		if (num % 2 === 0) {
			return num;
		}
	}
	fibSeq();
	return array.filter(evenNums);
}




//Largest Prime Factor
/*function largestPrimeFactor(product) {

	function primeNumbers() {
		var all        = [],
		    prime      = [],
		    counter    = 0;
		//Find all proceding numbers of product divided by 2
		for (var i = 1; i <= Math.ceil(product / 2); i++) {
			all.push(i);
		}
		for (var j = 0; j < all.length; j++) {
			//Targets a number
			var target  = all[j];				
			for (var k = 0; k < target; k++) {
				//Selects number to compare to target
				var current = all[k];
				//1 isn't a prime number
				if (target === 1) {
					counter += 1;
				//Finds numbers that aren't prime
				} else if (target % current === 0 && target != current && current != 1) {
					counter += 1;
				}
			}
			if (counter === 0) {
				prime.push(target);
			} else {
				counter = 0;
			}
		}
		return prime;
	}

	function primeFactors(array) {
		var numbers = [];
		for (var i = 0; i < array.length; i++) {
			var number = array[i];
			if (product % number === 0) {
				numbers.push(number);
			}
		}
		return numbers;
	}


	function largestFactor(curr, next) {
		if (next > curr) {
			return next;
		} else {
			return curr;
		}
	}

	var factors = primeFactors(primeNumbers());

	return factors.reduce(largestFactor);
}*/


function largestPrimeFactor(value) {

	var prime   = [],
		factors = [],
		answer  = 0,
		counter = 0;

	//Find Prime Numbers
	for (var target = 2; target < Math.ceil(value / 2); target++) {				
		for (var current = 2; current < target; current++) {
			//1 isn't a prime number
			if (target === 1) {
				counter += 1;
			//Finds numbers that aren't prime
			} else if (target % current === 0 && target != current && current != 1) {
				counter += 1;
			}
		}
		if (counter === 0) {
			prime.push(target);
		} else {
			counter = 0;
		}
	}

	//Find Prime Factors
	for (var factor = 0; factor < prime.length; factor++) {
		var number = prime[factor];
		if (value % number === 0) {
			factors.push(number)
		}
	}

	//Find Largest Prime Factor
	for (var i = 0; i < factors.length; i++) {
		var curr = factors[i],
			next = factors[i + 1];
		if (next > curr) {
			answer = next;
		} else {
			answer = curr;
		}
	}
	return answer;
}



/**************************************
DOM
**************************************/

var solutions = {
	prob1: sumMultiples(3, 5),
	prob2: sum(evenFib()),
	prob3: largestPrimeFactor(6578)
}

var buttons = document.getElementsByClassName('btn');

function showAnswer() {
	var probId = this.attributes['data-id'].value,
	    answer = document.getElementById(probId);
	answer.innerHTML = solutions[probId];
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', showAnswer);
}
