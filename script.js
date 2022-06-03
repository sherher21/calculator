let numberList = [];
let valueList = [];
let operatorList = [];
let newSet = false;
let output = document.querySelector('.output');

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case ('+'):
      return add(num1, num2);
    case ('*'):
      return multiply(num1, num2);
    case ('/'):
      return divide(num1, num2);
    case ('-'):
      return subtract(num1, num2);
    default:
      return;
  }
}

function clear() {
  numberList = [];
  operatorList = [];
  valueList = [];
  newSet = false;
  output.textContent = "";

}

const numbers = document.querySelectorAll('div[data-key="number"]');
numbers.forEach(num => num.addEventListener('click', (e) => {
  if (newSet) {
    output.textContent = "";
    numberList = [];
    newSet = false;
  }
  let value = e.target.dataset.num;
  if (numberList.length === 18) {
    return;
  }
  numberList.push(value);
  output.textContent += value;
}));

const clearButton = document.querySelector('div[data-key="clear"]');
clearButton.addEventListener('click', clear);

const operators = document.querySelectorAll('div[data-key="operator"]');
operators.forEach(operator => operator.addEventListener('click', (e) => {
  let oper = e.target.dataset.op;
  valueList.push(numberList.join(''));
  if (operatorList.length > 0) {
    let value = operate(operatorList[0], parseInt(valueList[0]), parseInt(valueList[1]));
    console.log(value);
    valueList = [];
    valueList.push(value.toString());
    output.textContent = value;
    operatorList = [];
  }
  operatorList.push(oper);
  newSet = true;
}));

const calculate = document.querySelector('div[data-key="calculate"]');
calculate.addEventListener('click', () => {
  valueList.push(numberList.join(''));
  output.textContent = operate(operatorList[0], parseInt(valueList[0]), parseInt(valueList[1]));
  valueList = [];
  operatorList = [];
  newSet = true;
})
