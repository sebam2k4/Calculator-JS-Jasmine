// JavaScript Calculator with Jasmine tests.
// Note: This calculator uses immediate execution input method

// closure commented out for Unit Testing to work - Cannot test private functions
//(function() {

// Global variables
var inputs = [];  // raw inputs stored in an array
var total = 0;
var operation = "";
var memory = 0;
var current_input;

// Event Listeners - try getting this into a for or foreach loop?
document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('add').addEventListener('click', add);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('equal').addEventListener('click', equal);
document.getElementById('clearAll').addEventListener('click', clearAll);
document.getElementById('ce').addEventListener('click', CE);
document.getElementById('changeSign').addEventListener('click', changeSign);
document.getElementById('muchWow').addEventListener('click', muchWow);
document.getElementById('number1').addEventListener('click', getInput);
document.getElementById('number2').addEventListener('click', getInput);
document.getElementById('number3').addEventListener('click', getInput);
document.getElementById('number4').addEventListener('click', getInput);
document.getElementById('number5').addEventListener('click', getInput);
document.getElementById('number6').addEventListener('click', getInput);
document.getElementById('number7').addEventListener('click', getInput);
document.getElementById('number8').addEventListener('click', getInput);
document.getElementById('number9').addEventListener('click', getInput);
document.getElementById('decimalPoint').addEventListener('click', getInput);

// Capture numeric inputs.
function getInput() {
    console.log(this.value); // test - show value of the button that's pressed
    if (this.value === '.') {
        // capture decimal point only once
        if (!inputs.includes('.')) {
            inputs.push(this.value); // add to raw inputs array
        }
    } else {
        // capture numbers
        inputs.push(this.value);

        //convert to number for calc display
        current_input = +(inputs.join('')) //join string numbers in the array and convert to a number
        updateDisplay(current_input);
    }
}

// Operations: add, subtract, multiply, and divide
function add() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "+"; // assign operation only after the first input
}

function subtract() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "-";
}

function multiply() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "*";
}

function divide() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "/";
}

// Change Sign -/+ (toggle positive/negative number)
function changeSign() {
    if (+(inputs.join('')) != 0) {  // join string numbers and convert to a number
        inputs[0] = -inputs[0];
        current_input = +(inputs.join(''));
        updateDisplay(current_input);
    } else {
        total = -total;
        calculate();  // need to run function to update the memory
    }
}

// Get result
function equal() {
    calculate();
    updateDisplay(total);
    operation = "";  // prevents repeating last operation on subsequent equal button presses.
    inputs = [];
  }

function calculate() {
current_input = +(inputs.join('')); // join string numbers and convert to a number

// Handling the very first calculation 
// AND handling operation and equal button presses when there is no numeric input.
if (operation == '') {
    if (inputs.length == 0 && total == 0) {
        memory = 0;
    } else if (inputs.length == 0) {
        memory = total;  // if no new input is selected, store total in memory.
    } else {
        total = +(inputs.join(''));  // if input made, store it in memory for the first calculation
    }

// perform calculations
} else if (operation == '+') {
    total = +(memory + current_input).toFixed(12);
} else if (operation == '-') {
    total = +(memory - current_input).toFixed(12);
} else if (operation == '*') {
    total = +(memory * current_input).toFixed(12);
} else if (operation == '/') {
    if (current_input == 0) {
        clearAll();
        total = "error: div by 0!";
    } else {
        total = +(memory / current_input).toFixed(12);
    }
}
// Test - show values for all variables in console
console.log("raw inputs:", inputs, "|",
            "total:", total, "|",
            "operation:", operation, "|",
            "memory:", memory, "|",
            "current_input:", current_input);
updateDisplay(total);
memory = total; // update memory for next operation

// reset raw inputs and current_input for next operations:
inputs = [];
current_input = 0;
}

// clear everything
function clearAll() {
    inputs = [];
    total = 0;
    operation = "";
    memory = 0;
    current_input = 0;
    updateDisplay(total);
}

// clear last entry
function CE() {
    inputs = [];
    updateDisplay("0");
}

// update display with input and output numbers
function updateDisplay(output) {
    // For numbers longer than 13 digits, use exponential notation to display nubmer
    if (typeof output === 'number' && output.toString().length > 12) {
        document.getElementById("display").value = output.toExponential(7);  //convert to exponential notation with 7 digit precision.
    } else {
        document.getElementById("display").value = output;
    }
}

// For a little bit of fun when performing your complicated calculations on this amazing Calculator5001e
// winky smiley face:
function muchWow() {
    var random_number = Math.floor(Math.random() * 5) + 1
    switch (random_number) {
        case 1:
            updateDisplay("much WOW!")
            break;
        case 2:
            updateDisplay("such Calc!")
            break;
        case 3:
            updateDisplay("such smart!")
            break;
        case 4:
            updateDisplay("much clever!")
            break;
        case 5:
            updateDisplay("much logic!")
            break;
    }

}
//}());