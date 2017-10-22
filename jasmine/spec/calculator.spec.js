// spec/calculator2.spec.js

describe("Calculator operations - Addition", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        a = 0;
        b = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should add a number", function() {
        add();
        inputs = ["5"];
        equal();
        expect(total).toEqual(5);
    });

    it("should add two numbers together", function() {
        inputs = ["5"];
        add();
        inputs = ["5"];
        equal();
        expect(total).toEqual(10);
    });

    it("should add two negative numbers", function() {
        inputs = ["5"];
        changeSign();
        add();
        inputs = ["5","5"];
        changeSign();
        equal();
        expect(total).toEqual(-60);
    });

    it("should add a negative and a positive number", function() {
        inputs = ["2"]
        changeSign();
        add();
        inputs = ["2"];
        equal();
        expect(total).toEqual(0);
    });

});

describe("Calculator operations - Subtraction", function () {

    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        a = 0;
        b = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should subtract a number", function() {
        subtract();
        inputs = ["1","0"];
        equal();
        expect(total).toEqual(-10);
    });

    it("should subtract two numbers", function() {
        inputs = ["5"];
        subtract();
        inputs = ["5"];
        equal();
        expect(total).toEqual(0);
    });

    it("should subtract two negative numbers", function() {
        inputs = ["5"];
        changeSign();
        subtract();
        inputs = ["5"];
        changeSign();
        equal();
        expect(total).toEqual(0);
    });

    it("should subtract a negative and a positive number", function() {
        inputs = ["5"];
        changeSign();
        subtract();
        inputs = ["5"];
        equal();
        expect(total).toEqual(-10);
    });

});

describe("Calculator operations - Multiplication", function () {
    
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        a = 0;
        b = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should multiply two numbers together", function() {
        inputs = ["2"];
        multiply();
        inputs = ["1","0"];
        equal();
        expect(total).toEqual(20);
    });

    it("should multiply by a negative number and return a negative number", function() {
        inputs = ["2"];
        multiply();
        inputs = ["1","0"];
        changeSign();
        equal();
        expect(total).toEqual(-20);
    });

    it("should return 0 when multiplying by 0", function() {
        inputs = ["2","0","0"];
        multiply();
        inputs = ["0"];
        equal();
        expect(total).toEqual(0);
    });

    it("should multiply by a decimal number and return a decimal number", function() {
        inputs = ["5"];
        multiply();
        inputs = [".","5"];
        equal();
        expect(total).toEqual(2.5);
    });

    it("should multiply by a decimal number and return a whole number", function() {
        inputs = ["10"];
        multiply();
        inputs = [".","5"];
        equal();
        expect(total).toEqual(5);
    });

    it("should multiply by three numbers in a chain", function() {
        inputs = ["10"];
        multiply();
        inputs = [".","5"];
        multiply();
        inputs = ["3"];
        equal();
        expect(total).toEqual(15);
    });
});

describe("Calculator operations - Division", function () {
    
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        a = 0;
        b = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should divide by a number and return a whole number", function() {
        inputs = ["6"];
        divide();
        inputs = ["2"];
        equal();
        expect(total).toEqual(3);
    });

    it("should divide by a number and return a decimal number", function() {
        inputs = ["5"];
        divide();
        inputs = ["2"];
        equal();
        expect(total).toEqual(2.5);
    });

    it("should divide by a negative number and return a negative number", function() {
        inputs = ["6"];
        divide();
        inputs = ["2"];
        changeSign();
        equal();
        expect(total).toEqual(-3);
    });

    it("should return an error when dividing by 0", function() {
        inputs = ["6"];
        divide();
        inputs = ["0"];
        equal();
        expect(total).toBe("error: div by 0!");
    });

    it("should divide by two numbers in a chain", function() {
        inputs = ["6"];
        divide();
        inputs = ["2"];
        divide();
        inputs = ["3"];
        equal();
        expect(total).toEqual(1);
    });
});

describe("Sample Calculation", function () {
    
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        a = 0;
        b = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("Should do the following operations in order (immediate execution logic): 3 + 7 -5 * 2 + 10 / 4 * 10 = 50 + (-25) + 5 * 2and return 60 as a result", function() {
        inputs = ["3"];
        add();
        inputs = ["7"];
        subtract();
        inputs = ["5"];
        multiply();
        expect(total).toEqual(5);
        inputs = ["2"]
        add();
        inputs = ["1","0"];
        divide();
        inputs = ["4"];
        multiply();
        inputs = ["1","0"];
        equal();
        expect(total).toEqual(50);
        add()
        inputs = ["2","5"];
        changeSign();
        add();
        inputs = ["5"];
        multiply();
        inputs = ["2"];
        equal();
        expect(total).toEqual(60);
    });
});