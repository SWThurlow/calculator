/*Retrieving html elements.*/
const display = document.querySelector('.display');
const error = document.querySelector('.error');
const inputs = document.querySelector('.inputs');

/*Variables for numbers and operators.*/
let num1 = '';
let num2 = '';
let operator = '';
let answer = '';
let decimal = true;

/*Let's do the math!*/
function add(a, b) {
    answer = a + b;
}

function subtract(a, b) {
    answer = a - b;
}

function multiply(a, b) {
    answer = a * b;
}

function divide(a, b) {
    if(b === 0){
        error.textContent = 'YOU KNOW THAT WONT WORK.'
        display.textContent = '';
        answer = '';
        return
    } else {
        answer = a / b; 
    }
}

/*Calculating the answer.*/
function calculate(equals) {
    if(num2 === ('.'||'') || num1 === '.') return;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }

    //Round answer.
    answer = (Math.round(answer * 10)) / 10;

    if(equals === true && num2 !== '0'){
        display.textContent = display.textContent + '=' + answer;
    }

    decimal = true;
}

/*Functions for when inputs are clicked or pressed*/
function click(target) {
    switch(target){
        case '1':
            numInput(target)
            break;
        case '2':
            numInput(target)
            break;
        case '3':
            numInput(target)
            break;
        case '4':
            numInput(target)
            break;
        case '5':
            numInput(target)
            break;
        case '6':
            numInput(target)
            break;            
        case '7':
            numInput(target)
            break;
        case '8':
            numInput(target)
            break;
        case '9':
            numInput(target)
            break;
        case '0':
            numInput(target)
            break;
        case '.':
            decimalPoint(target)
            break;
        case '+':
            operatorInput(target)
            break;
        case '-':
            operatorInput(target)
            break;            
        case '*':
            operatorInput(target)
            break;
        case '/':
            operatorInput(target)
            break;
        case '=':
            calculate(true);
            break;
        case 'Clear':
            clear();
            break;            
    }
}

//If the input is a number.
function numInput(inputString){
    if(answer !== ''){
        return;
    } else {
        display.textContent = display.textContent + inputString;
        if(operator === ''){
            num1 = num1 + inputString;
        } else {
            num2 = num2 + inputString;
        }
    }
}

//If the input is a decimal point.
function decimalPoint(inputString){
    if(decimal && operator === '') {
        num1 = num1 + inputString;
        decimal = false;
        display.textContent = display.textContent + inputString;
    } else if(decimal && operator !== '') {
        num2 = num2 + inputString;
        decimal = false;
        display.textContent = display.textContent + inputString;
    } 
}

//If the input is an operator.
function operatorInput(inputString){
    if (operator !== '' && num2 === '' || num1 === '') {
        return;
    } else if(operator !== '' && num2 !== '') {
        calculate(false);
        display.textContent = answer + inputString;
        num1 = answer;
        answer = '';
        num2 = '';
        decimal = true;
        operator = inputString;
    } else {
        decimal = true;
        operator = inputString;
        display.textContent = display.textContent + inputString;
    }
}

//Clearing the display and resetting values.
function clear() {
    display.textContent = '';

    num1 = '';
    num2 = '';
    operator = '';
    answer = '';
    decimal = true;
}


/*Event listener for inputs.*/
inputs.addEventListener('click', (e) => {
    if(target === inputs) return;
    click(e.target.textContent);
});
document.addEventListener('keydown', (e) => click(e.key));