// Immediate execution calculator input logic

var input = 0;
var temp_inputs = [];
var total = 0;
var operation = "";
updateDisplay(input);
var a = 0;
var b;

// get numeric input up to 13 digits long including decimals
function getInput(button) {
    console.log(button);
    if (temp_inputs.length > 12) {
        clearAll();
        updateDisplay("Too Many Nums!");
    } else {
        if (button.value === ".") {
            if (!temp_inputs.includes('.')) {
                temp_inputs.push(button.value);
            }
        } else {
            temp_inputs.push(button.value)
            console.log(temp_inputs);  //test
            input = Number(temp_inputs.join(''))
            console.log(input, typeof input);  //test
            updateDisplay(input);
        }
    }
}

function add() {
    if (temp_inputs.length !== 0) {
        console.log("addition, before calculate() num input: " + input + ", total: " + total);  //test
        calculate();
        console.log("addition, curent num input: " + input + ", total: " + total);  //test
        updateDisplay(total);
    }
    operation = "+";
}

function equal() {
    calculate();
    updateDisplay(total);
    operation = "";  // comment out if you want to repeat last operation on following equal button press
    temp_inputs = [];
  }

function changeSign() {
    input = -input;
    updateDisplay(input);
}

function subtract() {
    if (temp_inputs.length !== 0) {
        console.log("subtraction, before calculate() num input: " + input + ", total: " + total);  //test
        calculate();
        console.log("subtraction, curent num input: " + input + ", total: " + total);  //test
        updateDisplay(total);
    }
    operation = "-";
}

function multiply() {
    if (temp_inputs.length !== 0) {
        console.log("multiply, before calculate() num input: " + input + ", total: " + total);  //test
        calculate();
        console.log("multiply, curent num input: " + input + ", total: " + total);  //test
        updateDisplay(total);
    }
    operation = "*";
}

function divide() {
    if (temp_inputs.length !== 0) {
        console.log("divide, before calculate() num input: " + input + ", total: " + total);  //test
        calculate();
        console.log("divide, curent num input: " + input + ", total: " + total);  //test
        updateDisplay(total);
    }
    operation = "/";
}

function calculate() {
b = input;
if (operation == '') {
    if (temp_inputs.length == 0 && total == 0) {
        a = 0;
    } else if (temp_inputs.length == 0) {
        a = total;
    } else {
        a = input;
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
temp_inputs = [];
a = total;
}

// clear everything
function clearAll() {
    input = 0;
    temp_inputs = [];
    total = 0;
    operation = "";
    updateDisplay(total);
}

// clear current input
function ce() {
    temp_inputs = [];
    updateDisplay("0");
}

function updateDisplay(output) {
    document.getElementById("display").value = output;
}
