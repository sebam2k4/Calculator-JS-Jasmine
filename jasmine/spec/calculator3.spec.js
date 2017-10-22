// spec/calculator.spec.js

describe("Calculator operations", function () {
    it("should add two numbers together", function() {
        expect(add(1, 2)).toBe(3);
    });

    it("should subtract two numbers", function() {
        expect(subtract(3, 2)).toBe(1);
        expect(subtract(-10, -1)).toBe(-9);
        expect(subtract(-10, 1)).toBe(-11);
    });

    it("should multiply two numbers", function() {
        expect(multiply(3, 3)).toBe(9);
        expect(multiply(-2, -5)).toBe(10);
        expect(multiply(-2, 5)).toBe(-10);
    });

    it("should divide two numbers", function() {
        expect(divide(6, 3)).toBe(2);
        expect(divide(5, 2)).toBe(2.5); // test float result
        expect(divide(-6, 3)).toBe(-2);
        expect(divide(5, 0)).toBe("error, division by 0")
    });
});


// Show messages when inputing immature nubmbers like: 80085
describe("Immature numbers", function() {
    it("should show a scolding message", function() {
        expect(message()).toBe("Stop that you criminal scum!");
    });


});