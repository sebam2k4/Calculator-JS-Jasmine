// JavaScript Calculator Jasmine Tests

describe("Calculator operations - Addition:", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        memory = 0;
        current_input = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should add two numbers together, 5+5 = 10", function() {
        inputs = ["5"];
        add();
        inputs = ["5"];
        equal();
        expect(total).toEqual(10);
    });

    it("should add two negative numbers, (-5)+(-55) = -60", function() {
        inputs = ["5"];
        changeSign();
        add();
        inputs = ["5","5"];
        changeSign();
        equal();
        expect(total).toEqual(-60);
    });

    it("should add a negative and a positive number, (-2)+2 = 0", function() {
        inputs = ["2"]
        changeSign();
        add();
        inputs = ["2"];
        equal();
        expect(total).toEqual(0);
    });

    it("0.1 + 0.2 should equal 0.3 (Resolve floating point precision issue with operations on decimal numbers)", function() {
        inputs = ["0.1"];
        add();
        inputs = ["0.2"];
        equal();
        expect(total).toEqual(0.3);
    });

});

describe("Calculator operations - Subtraction:", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        memory = 0;
        current_input = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should subtract two numbers, 5-5 = 0", function() {
        inputs = ["5"];
        subtract();
        inputs = ["5"];
        equal();
        expect(total).toEqual(0);
    });

    it("should subtract two negative numbers, (-5)-(-5) = 0", function() {
        inputs = ["5"];
        changeSign();
        subtract();
        inputs = ["5"];
        changeSign();
        equal();
        expect(total).toEqual(0);
    });

    it("should subtract a negative and a positive number, (-5)-5 = -10", function() {
        inputs = ["5"];
        changeSign();
        subtract();
        inputs = ["5"];
        equal();
        expect(total).toEqual(-10);
    });

});

describe("Calculator operations - Multiplication:", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        memory = 0;
        current_input = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should multiply two numbers together, 2*10 = 20", function() {
        inputs = ["2"];
        multiply();
        inputs = ["1","0"];
        equal();
        expect(total).toEqual(20);
    });

    it("should multiply by a negative number and return a negative number, 2*(-10) = -20", function() {
        inputs = ["2"];
        multiply();
        inputs = ["1","0"];
        changeSign();
        equal();
        expect(total).toEqual(-20);
    });

    it("should return 0 when multiplying by 0, 200/0 = 0", function() {
        inputs = ["2","0","0"];
        multiply();
        inputs = ["0"];
        equal();
        expect(total).toEqual(0);
    });

    it("should multiply by a decimal number and return a decimal number, 5*(0.5) = 2.5", function() {
        inputs = ["5"];
        multiply();
        inputs = [".","5"];
        equal();
        expect(total).toEqual(2.5);
    });

    it("should multiply by a decimal number and return a whole number, 10*(0.5) = 5", function() {
        inputs = ["10"];
        multiply();
        inputs = [".","5"];
        equal();
        expect(total).toEqual(5);
    });

    it("should multiply by three numbers in a chain, 10*(0.5)*3 = 15", function() {
        inputs = ["10"];
        multiply();
        inputs = [".","5"];
        multiply();
        inputs = ["3"];
        equal();
        expect(total).toEqual(15);
    });
});

describe("Calculator operations - Division:", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        memory = 0;
        current_input = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("should divide by a number and return a whole number, 6/2 = 3", function() {
        inputs = ["6"];
        divide();
        inputs = ["2"];
        equal();
        expect(total).toEqual(3);
    });

    it("should divide by a number and return a decimal number, 5/2 = 2.5", function() {
        inputs = ["5"];
        divide();
        inputs = ["2"];
        equal();
        expect(total).toEqual(2.5);
    });

    it("should divide by a negative number and return a negative number, 6/(-2) = -3", function() {
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

    it("should divide by two numbers in a chain, 6/2/3 = 1", function() {
        inputs = ["6"];
        divide();
        inputs = ["2"];
        divide();
        inputs = ["3"];
        equal();
        expect(total).toEqual(1);
    });
});

describe("Sample Calculation:", function () {
    beforeEach(function() {
        display_input = 0;
        inputs = [];
        total = 0;
        operation = "";
        memory = 0;
        current_input = 0;
        // create dummy element so updateDisplay() function doesn't cause
        // TypeError: Cannot set property 'value' of null
        var dummyElement = document.createElement('span');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    });

    it("Should do the following operations in order (immediate execution calculator logic): 3 + 7 -5 * 2 + 10 / 4 * 10 = 50 + (-25) + 5 * 2 and return 60 as a result", function() {
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