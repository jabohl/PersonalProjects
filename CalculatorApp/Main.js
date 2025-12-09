let currInput = '';
let currOperation = '';
let prevInput = '';
//Declarations

//add number
function appendNum(Num) {
    currInput += Num;
    document.getElementById('display').value = `${prevInput} ${currOperation} ${currInput}`;
}

//append our values.
function appendOperation(operation) {
    if (currInput === '') return;
    if (prevInput !== '') {
        calculate(); 
    }
    currOperation = operation;
    prevInput = currInput;
    currInput = '';
    document.getElementById('display').value = `${prevInput} ${currOperation}`;
}

/*
Main calculator function:
Handles MDAS in PEMDAS
*/
function calculate() {
    if (prevInput === '' || currInput === '') return;
    let result;
    let prev = parseFloat(prevInput);
    let curr = parseFloat(currInput);

    switch (currOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currInput = result.toString();
    currOperation = '';
    prevInput = '';
    document.getElementById('display').value = currInput;
}
/**
Clear our display.

This helps viewing of calculation.
*/
function clearDisplay() {
    currInput = '';
    prevInput = '';
    currOperation = '';
    document.getElementById('display').value = '';
}
