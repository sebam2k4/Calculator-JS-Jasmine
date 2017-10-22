// Immediate execution calculator input logic
var display_input = 0;
var inputs = [];
var total = 0;
var operation = "";
var a = 0;
var b;

// get numeric input up to 13 digits long including decimals
function getInput(button) {
    console.log(button);
    if (inputs.length > 12) {
        clearAll();
        updateDisplay("Too Many Nums!");
    } else {
        if (button.value === ".") {
            if (!inputs.includes('.')) {
                inputs.push(button.value);
            }
        } else {
            inputs.push(button.value)
            display_input = Number(inputs.join('')) //join numbers to update display
            updateDisplay(display_input);
        }
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
    if (Number(inputs.join('')) != 0) {
        inputs[0] = -inputs[0];
        display_input = -display_input;
        updateDisplay(display_input);
    } else {
        total = -total; // doesn't work until i press equal sign
        calculate();  //fix?
        updateDisplay(total);
    }
}

function subtract() {
    if (inputs.length !== 0) {
        calculate();
        updateDisplay(total);
    }
    operation = "-";
}

function multiply() {
    if (inputs.length !== 0) {
        calculate();
        updateDisplay(total);
    }
    operation = "*";
}

function divide() {
    if (inputs.length !== 0) {
        calculate();
        updateDisplay(total);
    }
    operation = "/";
}

function calculate() {
b = Number(inputs.join(''));
if (operation == '') {
    if (inputs.length == 0 && total == 0) {
        a = 0;
    } else if (inputs.length == 0) {
        a = total;
    } else {
        a = Number(inputs.join(''));
        total = a;
    }
} else if (operation == '+') {
    total = a + b;
} else if (operation == '-') {
    total = a - b;
} else if (operation == '*') {
    total = a * b;
} else if (operation == '/') {
    if (b == 0) {
        clearAll();
        total = "error: div by 0!";
    } else {
        total = a / b;
    }
}
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
    document.getElementById("display").value = output;
}
