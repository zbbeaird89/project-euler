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



//Multiples of 3 and 5
function findMultiples() {
	var array = [];
	for (var i = 1; i <= 1000; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			array.push(i);
		} else if (i % 3 === 0) {
			array.push(i);
		} else if (i % 5 === 0) {
			array.push(i);
		}
	}
	return array;
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
function largestPrimeFactor(product) {

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
					/*console.log("Target: " + target + "; Current is " + current +
						        "; Counter: " + counter);*/
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

	console.log(factors.reduce(largestFactor));
}



/**************************************
DOM
**************************************/

var solutions = {
	prob1: sum(findMultiples()),
	prob2: sum(evenFib()),
	prob3: largestPrimeFactor(13195)
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
