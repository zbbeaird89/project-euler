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
function evenFibNum() {
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




/**************************************
DOM
**************************************/

var solutions = {
	prob1: sum(findMultiples()),
	prob2: sum(evenFibNum())
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
