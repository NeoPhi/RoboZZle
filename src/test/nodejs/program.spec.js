describe("Program", function() {
    var func = require("func");
    var command = require("command");

    var program;

    beforeEach(function() {
        program = require("program");
    });

    it("has default function", function() {
        expect(program.getFunction(0)).toBeDefined();
    });
});