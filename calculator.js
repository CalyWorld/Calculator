const number = document.querySelectorAll('.itemNumber');
const display = document.querySelector('.displayResult');
const operators = document.querySelectorAll('.itemOperator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.itemClear');
const percentage = document.querySelector('.percentage');
const plusEqual = document.querySelector('.plusEqual');
const dot = document.querySelector('.dot');


let currentNumber = "";
let displayValue = "";
let operatorName = "";

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
    case '+':
      display.textContent = add(num1, num2);
      break;
    case '-':
      display.textContent = subtract(num1, num2);
      break;
    case '*':
      display.textContent = multiply(num1, num2);
      break;
    case '÷':
      display.textContent = divide(num1, num2);
      break;

    // default:
    //         console.log('invalid operator');
    //   break;
  }
  currentNumber = display.textContent;   //stores calculated value
  operatorName = ""; //operator variable is cleared for next operation
  displayValue = ""; //displayValue is cleared for next operation

}




number.forEach((itemNumber) => {
  //populate display
  itemNumber.addEventListener('click', (e) => {

    //if displayValue is empty, number clicked equals displayValue
    if (!displayValue) {
      displayValue = e.currentTarget.textContent;

      //else append the numbers clicked into displayValue
    } else {
      displayValue += e.currentTarget.textContent;
    }
    //replaces the display with numbers clicked 
    display.textContent = displayValue;


  });
});


operators.forEach((itemOperator) => {
  itemOperator.addEventListener('click', (e) => {
    //currentNUmber and operator are stored then calculate(); function is being called upon 


    if (currentNumber && operatorName) {
      operate(operatorName, Number(currentNumber), Number(displayValue));
    }
    //if operator is not seleted but currentNumber and displayValue are stored, equate each number and clear displayValue
    else if (!operatorName && currentNumber && displayValue) {
      currentNumber = displayValue;
      displayValue = "";
    }
    //else if currentNumber exists from previous calculation, reset displayValue
    else if (currentNumber) {
      displayValue = "";
    }
    //else if no values are stored, store first number in currentNumber and reset displayValue
    else {
      currentNumber = Number(displayValue);
      displayValue = "";
    }
    //operator.textContent clicked is stored in variable operatorName
    operatorName += e.currentTarget.textContent;

  });
});



equal.addEventListener('click', () => {
  operate(operatorName, Number(currentNumber), Number(displayValue));

});



clear.addEventListener('click', () => {
  display.textContent = 0; //sets the textContent to 0
  displayValue = ""; //resets displayValue
  operatorName = ""; //resets operatorName
  currentNumber = ""; //restes currentNUmber
});


percentage.addEventListener('click', () => {
  if (displayValue) {
    displayValue = Number(displayValue / 100);
    display.textContent = displayValue;
  } else {
    currentNumber = Number(currentNumber / 100);
    display.textContent = currentNumber;
  }
});

plusEqual.addEventListener('click', () => {
  //if displayValue
  if (displayValue) {
    displayValue = Number(displayValue) * -1;
    display.textContent = displayValue;
    //else currentNumber
  } else {
    currentNumber = Number(currentNumber) * -1;
    display.textContent = currentNumber;
  }
});

dot.addEventListener('click', () => {
  if (displayValue.toString().indexOf('.') === -1) {
    //if there is no displayValue, add dot
    if (!displayValue) {
      displayValue = ".";
      //else if there is add it to displayValue
    } else {
      displayValue += ".";
    }
    //add displayValue to display
    display.textContent = displayValue;
  }
});
