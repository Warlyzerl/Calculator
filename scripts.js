function add (x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return +x - +y;
}

function multiply(x, y) {
    return (+x) * (+y);
}

function divide(x, y) {
    return (+x) / (+y);
}

function operate(){
    if (operator && firstOperand && secondOperand) {
        switch(operator){
            case '+':
                result = add(firstOperand, secondOperand);
                break;
            case '-':
                result = subtract(firstOperand, secondOperand);
                break;
            case 'x':
            result = multiply(firstOperand, secondOperand);
                break;
            case '÷':
                result = divide(firstOperand, secondOperand);
                break;
        }
    updateOutputDisplay();
    firstOperand = result;
    secondOperand = ''
    operator = '';
    previousResult = true;
    operatorPressed = false;
    }
}
let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let operator = '';
let operatorPressed = false;
let result = null;
let previousResult = false;

function updateOperand () {
    if (!operator && !previousResult) {
        firstOperand = firstOperand.concat(this.innerText);
        if (displayValue) {
            displayValue = displayValue.concat(this.innerText);
        }
        else {
            displayValue = this.innerText;
        }
    }
    else {
        secondOperand = secondOperand.concat(this.innerText);
        displayValue = displayValue.concat(this.innerText)
    }
    updateInputDisplay();
}

const numberButtons = document.querySelectorAll('#number');
numberButtons.forEach(button => {
    button.addEventListener('click', updateOperand);
})

function updateOperator() {
    if (!operatorPressed && firstOperand) {
        operator = this.innerText;
        if (previousResult) {
            displayValue = result.toString().concat(this.innerText);
        }
        else if (!previousResult && !operatorPressed){
            displayValue = displayValue.concat(this.innerText);
        }   
    }
    else if (!operatorPressed && !firstOperand) {
            operator = this.innerText;
            firstOperand = "0";
            displayValue = "0";
            displayValue = displayValue.concat(operator);
        }
        operatorPressed = true;
        updateInputDisplay();
    }
    
    

const operatorButtons = document.querySelectorAll('#operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', updateOperator);
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', operate);

function clear() {
    displayValue = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = null;
    previousResult = false;
    operatorPressed = false;
    updateInputDisplay();
    updateOutputDisplay();
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

function deletee() {
    if (secondOperand){
        secondOperand = secondOperand.slice(0, secondOperand.length-1);
    }
    else if (operator) {
        operator = '';
        operatorPressed = false;
    }
    else if (!previousResult && firstOperand) {
        firstOperand = firstOperand.slice(0, firstOperand.length-1);
    }
    
    if (displayValue) {
        displayValue = displayValue.slice(0, displayValue.length-1);
    }
    updateInputDisplay();
}

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', deletee);
const input = document.querySelector('#input');
const output = document.querySelector('#output');

function updateInputDisplay() {
    input.innerText = displayValue;
    if (!input.innerText) {
        input.innerText = 0;
    }
}

function updateOutputDisplay() {
    output.innerText = result;
}