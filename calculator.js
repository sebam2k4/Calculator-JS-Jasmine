// JavaScript Calculator with Jasmine tests.
// Note: This calculator uses immediate execution input method

// Global variables
var display_input = 0;
var inputs = [];  // raw inputs stored in an array
var total = 0;
var operation = "";
var memory = 0;
var current_input;

// Capture numeric inputs.
function getInput(button) {
    console.log(button); // test - show html of the button that's pressed
    
    if (button.value === '.') {
        // capture decimal point only once
        if (!inputs.includes('.')) {
            inputs.push(button.value); // add to raw inputs array
        }
    } else {
        // capture numbers
        inputs.push(button.value);

        //convert to number for calc display
        display_input = +(inputs.join('')) //join string numbers in the array and convert to a number
        updateDisplay(display_input);
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
        display_input = -display_input;
        updateDisplay(-display_input);
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

// reset raw inputs and display_input for next operations:
inputs = [];
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
    // For numbers longer than 13 digits, use exponential notation to display nubmer
    if (typeof output === 'number' && output.toString().length > 12) {
        document.getElementById("display").value = output.toExponential(7);  //convert to exponential notation with 7 digit precision.
        console.log(total, typeof total);
        console.log(inputs, display_input)
    } else {
        document.getElementById("display").value = output;
    }

}

// For a little bit of fun when performing your complicated calculations on this amazing Calculator5001e
// winky smiley face:
function much_wow() {
    var random_number = Math.floor(Math.random() * 4) + 1
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