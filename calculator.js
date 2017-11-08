// Immediate execution calculator input logic
var display_input = 0;
var inputs = [];
var total = 0;
var operation = "";
var a = 0;
var b;

// Allow numeric input up to 13 digits long or up to 11 decimals.
function getInput(button) {
    console.log(button);
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

function changeSign() {
    if (+(inputs.join('')) != 0) {  //join string numbers and convert to a number
        inputs[0] = -inputs[0];
        display_input = -display_input;
        updateDisplay(display_input);
    } else {
        total = -total;
        calculate(); // need to run function to update the current_total (a)
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
b = +(inputs.join('')); // convert inputs to number
if (operation == '') {
    if (inputs.length == 0 && total == 0) {
        a = 0;
    } else if (inputs.length == 0) {
        a = total;
    } else {
        a = +(inputs.join(''));
        total = a;
    }
} else if (operation == '+') {
    total = +(a + b).toFixed(12);
} else if (operation == '-') {
    total = +(a - b).toFixed(12);
} else if (operation == '*') {
    total = +(a * b).toFixed(12);
} else if (operation == '/') {
    if (b == 0) {
        clearAll();
        total = "error: div by 0!";
    } else {
        total = +(a / b).toFixed(12);
    }
}
console.log(display_input,
            inputs,
            total,
            operation,
            a,
            b);
updateDisplay(total);
inputs = [];
a = total;
display_input = 0;
}

// clear everything
function clearAll() {
    display_input = 0;
    inputs = [];
    total = 0;
    operation = "";
    a = 0;
    b = 0;
    updateDisplay(total);
}

// clear current input
function ce() {
    inputs = [];
    updateDisplay("0");
}

function updateDisplay(output) {
    if (typeof output === 'number' && output.toString().length > 12) {
        document.getElementById("display").value = output.toExponential(7);  //convert to exponential notation with 7 digit precision.
        console.log(total, typeof total);
        console.log(inputs, display_input)
    } else {
        document.getElementById("display").value = output;
    }

}
