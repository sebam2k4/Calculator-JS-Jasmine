// JavaScript Calculator with Jasmine tests.
// Note: This calculator uses the immediate execution input method

// Global variables
var display_input = 0;
var inputs = [];
var total = 0;
var operation = "";
var memory = 0;
var current_input;

// Capture numeric inputs.
function getInput(button) {
    console.log(button); // test - show html of the button that's pressed
    
    // capture decimal point only once
    if (button.value === '.') {
        if (!inputs.includes('.')) {
            inputs.push(button.value);
        }
    } else {
        inputs.push(button.value)
        display_input = +(inputs.join('')) //join string numbers and convert to a number
        updateDisplay(display_input);
    }
    
}

function add() {
    if (inputs.length !== 0) {
        calculate();
        updateDisplay(total);
    }
    operation = "+";
}

// not working properly
function equal() {
    calculate();
    updateDisplay(total);
    operation = "";  // comment out if you want to repeat last operation on following equal button press
    inputs = [];
  }

// Change Sign -/+ (toggle positive/negative number)
function changeSign() {
    if (+(inputs.join('')) != 0) {  //join string numbers and convert to a number
        inputs[0] = -inputs[0];
        display_input = -display_input;
        updateDisplay(display_input);
    } else {
        total = -total;
        calculate(); // need to run function to update the memory (a)
        updateDisplay(total);
    }
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

function calculate() {
current_input = +(inputs.join('')); // convert inputs to number
if (operation == '') {
    if (inputs.length == 0 && total == 0) {
        memory = 0;
    } else if (inputs.length == 0) {
        memory = total;
    } else {
        memory = +(inputs.join(''));
        total = memory;
    }
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
console.log("raw inputs:", inputs, "|",
            "total:", total, "|",
            "operation:", operation, "|",
            "memory:", memory, "|",
            "current_input:", current_input);
updateDisplay(total);
inputs = [];
memory = total;
display_input = 0;
}

// clear everything
function clearAll() {
    display_input = 0;
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
    // For numbers longer than 13 digits, use exponential notation
    if (typeof output === 'number' && output.toString().length > 12) {
        document.getElementById("display").value = output.toExponential(7);  //convert to exponential notation with 7 digit precision.
        console.log(total, typeof total);
        console.log(inputs, display_input)
    } else {
        document.getElementById("display").value = output;
    }

}
