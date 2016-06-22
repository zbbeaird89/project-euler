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



//Count through every number
//Target number
//Multiply numbers less than target
//If no multiples equal target, store number as prime


//Largest Prime Factor
function largePrimeFactor(product) {
	function findPrime() {
		var all        = [],
		    prime      = [],
		    counter    = 0;

		//Find all proceding numbers of product divided by 2
		for (var i = 1; i <= Math.ceil(product / 2); i++) {
			all.push(i);
		}

		//Find prime numbers in "all" array
		for (var j = 0; j < all.length; j++) {
			var target  = all[j];				
			for (var k = 0; k < target; k++) {
				var current = all[k];
				if (target === 1) {
					counter += 1;
				} else if (target % current === 0 && target != current && current != 1) {
					counter += 1;
					console.log("Target: " + target + "; Current is " + current +
						        "; Counter: " + counter);
				}
			}
			if (counter === 0) {
				prime.push(target);
			} else {
				counter = 0;
			}
		}
		console.log(prime);
	}
	findPrime();
}



/**************************************
DOM
**************************************/

var solutions = {
	prob1: sum(findMultiples()),
	prob2: sum(evenFib()),
	prob3: largePrimeFactor(10)
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
