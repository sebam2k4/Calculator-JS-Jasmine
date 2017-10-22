// spec/calculator2.spec.js

describe("Calculator operations - Addition", function () {
    beforeEach(function() {
        total = 0;
    });

    it("should add a number", function() {
        input = 5;
        add();

        expect(total).toEqual(5);
    });

    it("should add two numbers", function() {
        calc.add(2);
        calc.add(1);
        expect(calc.total).toEqual(3);
    });

    it("should add two negative numbers", function() {
        calc.add(-5);
        calc.add(-9);
        expect(calc.total).toEqual(-14);  // 0 + (-5) + (-9) = -14
    });

    it("should add a negative and a positive number", function() {
        calc.add(-5);
        calc.add(9);
        expect(calc.total).toEqual(4);  // 0 + (-5) + 9 = 4
    });

});

describe("Calculator operations - Subtraction", function () {
    // calc.total = 0; for all subtraction tests
    beforeEach(function() {
        calc = new Calculator();
        calc.total = 0; //calculator current total set to 0
    });

    it("should subtract a number", function() {
        calc.subtract(10);
        expect(calc.total).toEqual(-10);
    });

    it("should subtract two numbers", function() {
        calc.subtract(2);
        calc.subtract(1)
        expect(calc.total).toEqual(-3); // 0 - 2 - 1 = -3
    });

    it("should subtract two negative numbers", function() {
        calc.subtract(-5);
        calc.subtract(-9)
        expect(calc.total).toEqual(14); // 0 - (-5) - (-9) = 14
    });

    it("should subtract a negative and a positive number", function() {
        calc.subtract(-5); 
        calc.subtract(9)
        expect(calc.total).toEqual(-4); // 0 - (-5) - 9 = -4
    });

});

describe("Calculator operations - Multiplication", function () {
    
    beforeEach(function() {
        calc = new Calculator();
        calc.total = 5;  //calculator current total set to 5
    });

    it("should multiply by a number", function() {
        calc.multiply(5);
        expect(calc.total).toEqual(25);
    });

    it("should multiply by a negative number and return a negative number", function() {
        calc.multiply(-10);
        expect(calc.total).toEqual(-50);
    });

    it("should return 0 when multiplying by 0", function() {
        calc.multiply(0);
        expect(calc.total).toEqual(0);
    });

    it("should multiply by a decimal number and return a decimal number", function() {
        calc.multiply(0.1);
        expect(calc.total).toEqual(0.5);
    });

    it("should multiply by a decimal number and return a whole number", function() {
        calc.multiply(0.2);
        expect(calc.total).toEqual(1);
    });

    it("should multiply by three numbers in a chain", function() {
        calc.multiply(2);
        calc.multiply(5);
        calc.multiply(10)
        expect(calc.total).toEqual(500);
    });
});

describe("Calculator operations - Division", function () {
    
    beforeEach(function() {
        calc = new Calculator();
        calc.total = 5;  //calculator current total set to 5
    });

    it("should divide by a number and return a whole number", function() {
        calc.divide(5);
        expect(calc.total).toEqual(1);
    });

    it("should divide by a number and return a decimal number", function() {
        calc.divide(10);
        expect(calc.total).toEqual(0.5);
    });

    it("should divide by a negative number and return a negative number", function() {
        calc.divide(-2);
        expect(calc.total).toEqual(-2.5);
    });

    it("should return an error when dividing by 0", function() {
        calc.divide(0);
        expect(calc.total).toBe("error! division by 0");  //change to use a message function later?
    });

    it("should divide by two numbers in a chain", function() {
        calc.divide(5);
        calc.divide(2);
        expect(calc.total).toEqual(.5);  //change to use a message function later?
    });
});

describe("Sample Calculation", function () {
    
    beforeEach(function() {
        calc = new Calculator();
        calc.total = 0;  //calculator current total set to 0
    });

    it("Should do the following operations in order: +7, -5, +10, *3, /4, -1, *5, and return 40 as a result", function() {
        calc.add(7);
        calc.subtract(5);
        calc.add(10);
        expect(calc.total).toEqual(12);
        calc.multiply(3);
        calc.divide(4);
        expect(calc.total).toEqual(9);
        calc.subtract(1);
        calc.multiply(5);
        expect(calc.total).toEqual(40);
    });
});