const input1 = document.getElementById('app__input-first');
const input2 = document.getElementById('app__input-second');
const buttonAC = document.getElementById('app__action-clear');
const buttonPlus = document.getElementById('app__action-plus');
const buttonMinus = document.getElementById('app__action-minus');
const buttonResult = document.getElementById('app__result');
const result = document.getElementById('app__result-id');

let action = '';
let numberResult = 0;
// console.log(input1);
// console.log(input2);
// console.log(buttonAC);
// console.log(buttonPlus);
// console.log(buttonMinus);
// console.log(buttonResult);
// console.log(result);

function printResult(resultNum) {
	result.innerHTML = resultNum; 
}

function calculate(inputFirst, inputSecond, actionSym) {
	let num1 = Number(inputFirst.value);
	let num2 = Number(inputSecond.value);

	if (actionSym == '+') {
		return num1 + num2;
	} else if (actionSym == '-') {
		return num1 - num2;
	} else if (actionSym == '.') {
		inputFirst.value = 0;
		inputSecond.value = 0;
		result.innerHTML = 0;
	} 
}

buttonAC.onclick = function() {
	action = '.';
	numberResult = calculate(input1, input2, action);
	console.log(action);
}

buttonPlus.onclick = function() {
	action = '+';
	numberResult = calculate(input1, input2, action);
	console.log(action);
}

buttonMinus.onclick = function() {
	action = '-';
	numberResult = calculate(input1, input2, action);
	console.log(action);
}

buttonResult.onclick = function() {
	action = '=';
	printResult(numberResult);
	console.log(action);
}

