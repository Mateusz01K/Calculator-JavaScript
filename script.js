const cleanButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const operatorsButtons = document.querySelectorAll('.operator');
const numberButton = document.querySelectorAll('.number')
const mathSign = document.querySelector('.mathSign');
const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
let result = '';

function displayNumber(){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    currentNumber.innerHTML += this.textContent;
}

function operate(){
    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return;
    }

    else if(currentNumber.innerHTML === ''){
        return;
    }

    if(mathSign.innerHTML !== ''){
        showResult();
    }

    if(currentNumber.innerHTML === '0' && mathSign.innerHTML === '/'){
        currentNumber.innerHTML = "Nie dzielimy przez 0!";
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';

    if(mathSign.innerHTML === '='){
        return;
    }
}

function showResult(){
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator){
        case'+':
        result = a+b;
        break;
        case'-':
        result = b-a;
        break;
        case'*':
        result = a*b;
        break;
        case'/':
        result = b/a;
        break;
        case'a2':
        result = b**a;
        break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearScreen(){
    result = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
    previousNumber.innerHTML = '';
}








operatorsButtons.forEach((button)=>button.addEventListener('click', operate));
equalsButton.addEventListener('click', showResult);
cleanButton.addEventListener('click', clearScreen);
numberButton.forEach((button)=>{
    button.addEventListener('click', displayNumber);
})